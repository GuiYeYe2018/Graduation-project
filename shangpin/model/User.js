var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    pwd:String,
    email:String,
});
mongoose.model('use',UserSchema);