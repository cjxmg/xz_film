/**
 * Created by xmg on 2017/1/10.
 */
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');

//编译生成Movie模型
var Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;