var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    biaoti:String,
    xiaoshuo:String,
});
mongoose.model('xiaoshuo',UserSchema);