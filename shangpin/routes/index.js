var express = require('express');
var mongoose = require('mongoose');
var app= express();
var router = express.Router();
require("../model/User.js");
require("../model/Shangpin")
require("../model/xiaoshuo")
var User = mongoose.model('use');
var SHangpin = mongoose.model('shangpin');
var xiaoshuo = mongoose.model('xiaoshuo');
mongoose.Promise = global.Promise;


app.all('*',function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'3.2.1');

  res.header("Conten-Type","appliction/json;charset=utf-8");
  if(req.method == 'OPTIONS'){
    res.sendStatus(200);
  }else{
    next();
  }
  
});


/* GET home page. */

router.get('/cha',function(req,res){
  User.find(function(err,docs){
    res.send(docs);
  });
});

router.post('/login',function(req,res){
  var name = req.query.name;
  var pwd = req.query.pwd;
  User.findOne({name:name,pwd:pwd},function (error,result) {
    if(result==null){
       res.json("无法登录");
    }else{
      res.send("true");
    }
  })
})

// router.post('/cha',function(req,res){
//   var name = req.query.name;
//   var pwd = req.query.pwd;
//   User.findOne({name:name,pwd:pwd},function (error,result) {
//     if(result==null){
//       res.send("查无此人");
//     }else{
//       res.json(result);
//     }
//   })
// })
router.post('/register',function (req,res) {
  var name = req.query.name;
  var pwd = req.query.pwd;
  var email = req.query.email; 
  User.findOne({name:name},function (error,result) {
    if(result==null){
      var user = new User(
        {
          name:name,
          pwd:pwd,
          email:email
        }
      )
      user.save(function(err,result){
        if(result==null){
          res.send('注册失败，请联系客服');
        }else{
          res.send('true');
        }
      })
    }else{
      res.send('账号已被注册');
    }
  })

;
})
router.post('/shangpin',function (req,res) {
  SHangpin.find({},function (error,result) {
    res.json(result);
  })
  
})

router.post('/xiaoshuo',function(req,res){
  var name = req.query.name;
  xiaoshuo.findOne({name:name},function(error,result){
    res.json(result);
  })
})


router.post('/read',function(req,res){
  var name = req.query.name;
  xiaoshuo.findOne({name:name},function(error,result){
    res.json(result);
  })
})
module.exports = router;
