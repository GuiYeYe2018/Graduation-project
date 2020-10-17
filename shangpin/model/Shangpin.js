var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    id:String,
    name:String,
    zuozhe:String,
    faxing:String,
    zishu:String,
    jiage:String,
    xiaoshuo:String,
});
mongoose.model('shangpin',UserSchema);