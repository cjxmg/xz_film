/**
 * Created by xmg on 2017/1/10.
 * 数据库模式
 */
var mongoose = require('mongoose');
var moment = require('moment');

//定义数据集的格式
var MovieSchema = new mongoose.Schema({
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,  //海报
    year: String,
    meta: {
        createAt: {
            type: String,
            default: moment(new Date).format('YYYY-MM-DD HH:mm')
        },
        updateAt: {
            type: String,
            default: moment(new Date).format('YYYY-MM-DD HH:mm')
        }
    },
    director: String
});

//添加一些静态方法
MovieSchema.statics = {
    //取出数据库的所有数据
    fetch: function(cb) {
        return this
            .find({})
            .sort({'meta.updateAt': -1})
            .exec(cb);
    },

    //取出一条数据
    findById: function(id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb);
    }

};



module.exports = MovieSchema;