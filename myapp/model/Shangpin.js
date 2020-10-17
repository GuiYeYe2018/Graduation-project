var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    zuozhe:String,
    faxing:String,
    zishu:String,
    jiage:String,
    cookies:String
});
mongoose.model('shangpin',UserSchema);