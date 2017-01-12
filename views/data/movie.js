/**
 * Created by xmg on 2017/1/10.
 * 模拟电影数据
 */

//首页电影数据
var homeMovie = {
    title: '电影小站',
    movie: [
        {
            id: 1,
            name: '变形金刚',
            time: '2014年10月10号',
            director: '小金刚'
        },
        {
            id: 2,
            name: '雪国列车',
            time: '2013年10月10号',
            director: '小明哥'
        },
        {
            id: 3,
            name: '激战',
            time: '2016年5月6号',
            director: '大飞哥'
        },
        {
            id: 4,
            name: '寒战',
            time: '2016年8月10号',
            director: 'xmg'
        },
        {
            id: 5,
            name: '生死狙击',
            time: '2014年10月10号',
            director: '这个不知道'
        },
        {
            id: 6,
            name: '源代码',
            time: '2014年10月10号',
            director: '东野'
        },
        {
            id: 7,
            name: '嫌疑人X的献身',
            time: '2014年10月10号',
            director: '东野圭吾'
        }
    ]
};


//详情页电影数据
var detailMovie = [
    {
        title: '电影详情页',
        movie: {
            id: 1,
            name: '变形金刚',
            time: '2014年10月10号',
            director: '小金刚',
            content: '您好。以下的所有言论，均在“如果流传中的陈思诚出轨事件是真的”这个大前提下，如这事压根就是假的，那就权当我放屁'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 2,
            name: '雪国列车',
            time: '2013年10月10号',
            director: '小明哥',
            content: '我只是个普通人，兼某些文字的作者。你知道，如今网络很发达，信息与观点的输出渠道也是空前丰富，于是便带动起一个新的产业——互联网内容创业，也养出了一批“作者”，我便是其中之一'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 3,
            name: '激战',
            time: '2016年5月6号',
            director: '大飞哥',
            content: '这几天甚至未来的一段时间内，你都会看到网络上有无数个“意见领袖”率领无数个“意见'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 4,
            name: '寒战',
            time: '2016年8月10号',
            director: 'xmg',
            content: '群体”对你个人的事情品头论足，各抒己见，或是正襟危坐，亦或是歇斯底里。'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 5,
            name: '生死狙击',
            time: '2014年10月10号',
            director: '这个不知道',
            content: '群体”对你个人的事情品头论足，各抒己见，或是正襟危坐，亦或是歇斯底里。'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 6,
            name: '源代码',
            time: '2014年10月10号',
            director: '东野',
            content: '群体”对你个人的事情品头论足，各抒己见，或是正襟危坐，亦或是歇斯底里。'
        }
    },
    {
        title: '电影详情页',
        movie: {
            id: 7,
            name: '嫌疑人X的献身',
            time: '2014年10月10号',
            director: '东野圭吾',
            content: '我们这些写东西的，逮住类似于你所经历的事件，噼里啪啦凑出一些中文汉字，交到某'
        }
    }
];


module.exports = {
    homeMovie: homeMovie,

    getDetailMovie: function(id) {
        for (var i=0; i <　detailMovie.length; i++) {
            if(detailMovie[i].movie.id == id){
                return detailMovie[i];
            }
        }
        //没找到
        return 'not found';
    }
}