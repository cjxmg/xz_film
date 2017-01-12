/**
 * Created by xmg on 2017/1/10.
 * 入口文件
 */
var express = require('express');
var mongoose = require('mongoose');
var hbs = require('hbs');        //模板引擎
var bodyParser = require('body-parser');
var moment = require('moment');   //格式化时间
var Movie = require('./models/movie');

var app = express();
mongoose.connect('mongodb://localhost:27017/movie');


//set方法用于指定变量的值，为系统变量view engine和views指定值
app.set('view engine', 'html');   // 指定模板文件的后缀名为html
app.set('views', './views');
//app.use(express.bodyParser());
app.use(express.static('public'));  //以后引入public文件夹下的东西只需 如：'/img.jpg'
app.use(bodyParser.urlencoded({
    extended: true   //注意false和true的区别
}));
app.engine('html', hbs.__express);



app.listen(3000);

//首页
app.get('/', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log('错误');
            return;
        }
        res.render('index', {
            title: '电影小站',
            homeMovie: movies
        });

    });
});

//详情页
app.get('/movie/:id', function(req, res) {   //如：/movie/20
    var id = req.params.id;  //用户点击的电影对应的id

    Movie.findById(id, function(err, movie) {
        if(err) {
            console.log('错误' + err);
            res.send('not found');
            return;
        }
        res.render('detail', {
            title: '详情页--' + movie.title,
            detailMovie: movie
        });
    })
});

//后台页面
//后台录入页
app.get('/admin/movie', function(req, res) {
    res.render('admin_form', {
        title: '电影资源录入',
        movie: {
            title: '',
            language: '',
            country: '',
            summary: '',
            flash: '',
            poster: '',  //海报
            year: '',
            director: ''
        }
    });
});

//电影录入的post数据提交
app.post('/admin/movie/new', function(req, res) {
    var id =  req.body.movie._id;
    var movie = req.body.movie;

    //如果id存在，则说明此时是更新数据
    if(id){
        var newMovie = {
            title: movie.title,
            language: movie.language,
            country: movie.country,
            summary: movie.summary,
            flash: movie.flash,
            poster: movie.poster,  //海报
            year: movie.year,
            director: movie.director,
            meta: {
                updateAt: moment(new Date).format('YYYY-MM-DD HH:mm')
            }
        }

        //这个方法不能更改深层的数据，如：改不了meta
        //Movie.update({_id: id}, movie, {upsert : true}, function(err) {
        //    if(err){
        //        console.log('更新电影时录入失败！');
        //        return;
        //    }
        //    res.redirect('/movie/' + id);
        //});

        //这个方法可以解决上面的问题
        Movie.findOne({_id: id}, function(err, doc) {
            doc.set(newMovie);
            doc.save();
            res.redirect('/movie/' + id);
        });
    }
    else{
        var movieEntity = new Movie({
            title: movie.title,
            language: movie.language,
            country: movie.country,
            summary: movie.summary,
            flash: movie.flash,
            poster: movie.poster,  //海报
            year: movie.year,
            director: movie.director
        });
        movieEntity.save(function(err){
            if(err){
                console.log('录入电影错误');
                //return;
            }
        });

        res.redirect('/movie/' + movieEntity._id);
    }
});


//后台列表页
app.get('/admin/list', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log('错误');
            return;
        }
        res.render('admin_list', {
            title: '后台列表页',
            movies: movies
        });
    });
});

//删除一条电影
app.delete('/admin/list', function(req, res) {
    var id = req.query.id;

    if(id){
        Movie.remove({_id: id}, function(err) {
            if(err){
                console.log('删除数据出错!!');
                return;
            }
            res.json({success: 1});
        });
    }
})

//后台电影更新
app.get('/admin/update/:id', function(req, res) {
    var id = req.params.id;

    Movie.findById(id, function(err, movie) {
        if(err){
            console.log('更新电影出错');
            return;
        }
        res.render('admin_form', {
            title: '更新电影信息',
            movie: movie
        });
    });
});


console.log('run success : http://127.0.0.1:3000');

