var mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/myapp');

var db = mongoose.connection;




db.on('error',function callback(){
    console.log("Connection error");
});

db.once('open',function callback(){
     console.log('Db link success!');
});


module.exports = mongoose;
