var express = require('express');
var app= express();
var router = express.Router();



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
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get('/register.html', function(req, res, next) {
  res.render('register.html');
});

router.get('/text', function(req, res, next) {
  res.render('shangpin.html');
});


router.get('/shangpin',function(req,res){
  res.render("shangpin.html");
})

router.get('/read',function(req,res){
  res.render("read.html")
})

module.exports = router;
