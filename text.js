/**
 * Created by xmg on 2017/1/10.
 * 测试文件
 */
var moment = require('moment');

var time = moment(new Date).format('YYYY-MM-DD HH:mm:ss');

console.dir(time);


var MovieSchema = new mongoose.Schema({
    doctoe: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    
    
    
    
