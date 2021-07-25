var express = require('express');
var router = express.Router();
var monk = require('monk');//acquire
var db = monk('localhost:27017/Remote');
var collection= db.get('Login');
var moment=require('moment');
var randomstring = require("randomstring");
var nodemailer= require("nodemailer");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin', function(req, res) {
  res.render('admin');
});

router.get('/adminsign', function(req, res) {
  res.render('adminsign');
});
/*=============================forgot start====================================*/
router.get('/forgot', function(req, res) {
  res.render('forgot');
});

router.post('/check',function(req,res){
  //var otp=randomstring.generate(7);
  var otp=
  randomstring.generate({
  length: 6,
  charset: 'numeric'
 });
  collection.findOne({"email":req.body.email},function(error,docs){
  if(error || docs==null){
    res.sendStatus(500)
  }else{
    console.log(otp)
    collection.update({"email":req.body.email},{$set:{"otp":otp}})
    res.sendStatus(200)
     var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
      user: 'thubdummy@gmail.com',
      pass: 'dummy@1234'
    }
  });
  var mailOptions = {
    from: 'thubdummy@gmail.com',
    to:docs.email,
    subject: 'OTP Verification',
    text: otp
  };

  transporter.sendMail(mailOptions, function(error, info){
   if (error) {
    console.log(error);
   }else {
    console.log('Email sent: ' + info.response);
  }
  });
  }
 })
})



router.post('/valid',function(req,res){
  console.log(req.body)
  collection.findOne({"email":req.body.email,"otp":req.body.otp},function(error,docs){
    if(error || (docs==null)){
      res.sendStatus(500)
    }else{
      res.sendStatus(200)
    }
  })
})

router.post('/password',function(req,res){
  collection.update({"email":req.body.email},{$set:req.body},function(error,docs){
    if(error||(docs==null)){
      res.sendStatus(500)
    }else{
      res.sendStatus(200)
    }
  })
})


/*=============================forgot end====================================*/
/*=============================login start====================================*/
router.post('/login', function(req, res) {
  console.log(req.body)
   collection.findOne({$or:[{"email":req.body.email},{"name":req.body.email}],"pwd":req.body.pwd},function(error,docs){
    if(error || (docs==null)){
      res.sendStatus(500)
    }else{
      res.sendStatus(200) 
    }
   })
});

//reset
router.get('/forgot', function(req, res) {
  res.render('forgot');
});



//insert
router.post('/postdata', function(req, res) {
 console.log(req.body);//frontend data delivery to middleware
 
 //date 
  var data=
  {
     name:req.body.name,
     email:req.body.email,
     pwd:req.body.pwd,
     cpwd:req.body.cpwd,
     gender:req.body.gender,
     phone:req.body.phone,
     date:moment().format("DD-MM-YYYY"),
     time:moment().format("LTS")
  }

  // collection.findOne({"name":req.body.name},function(err1,docs1){\\duplicates
   collection.findOne({$or:[{"name":req.body.name},{"email":req.body.email},{"phone":req.body.phone}]},function(err1,docs1){
    if(err1 || (docs1==null)){  
      //collection.insert(req.body,function(error,docs){
        collection.insert(data,function(error,docs){
    if(error){
      res.sendStatus(500)
    }else{
      res.sendStatus(200)
    }
  })
 }
 else{
  res.sendStatus(500)
 }
 })
})
/*=============================login end====================================*/
router.get('/category', function(req, res) {
  res.render('category');
});

router.get('/category1', function(req, res) {
  res.render('category1');
});

router.get('/category2', function(req, res) {
  res.render('category2');
});
router.get('/category3', function(req, res) {
  res.render('category3');
});
router.get('/category4', function(req, res) {
  res.render('category4');
});
router.get('/category5', function(req, res) {
  res.render('category5');
});
router.get('/category6', function(req, res) {
  res.render('category6');
});

router.get('/product', function(req, res) {
  res.render('product');
});

router.get('/product_details', function(req, res) {
  res.render('product_details');
});

router.get('/product_details2', function(req, res) {
  res.render('product_details2');
});

router.get('/product_details3', function(req, res) {
  res.render('product_details3');
});

router.get('/product_details4', function(req, res) {
  res.render('product_details4');
});

router.get('/product_details5', function(req, res) {
  res.render('product_details5');
});

router.get('/product_details6', function(req, res) {
  res.render('product_details6');
});

router.get('/product_details7', function(req, res) {
  res.render('product_details7');
});

router.get('/product_details7', function(req, res) {
  res.render('product_details7');
});

router.get('/product_details8', function(req, res) {
  res.render('product_details8');
});

router.get('/product_details9', function(req, res) {
  res.render('product_details9');
});

router.get('/product_details10', function(req, res) {
  res.render('product_details10');
});

router.get('/product_details11', function(req, res) {
  res.render('product_details11');
});

router.get('/product_details12', function(req, res) {
  res.render('product_details12');
});

router.get('/product_details13', function(req, res) {
  res.render('product_details13');
});

router.get('/product_details14', function(req, res) {
  res.render('product_details14');
});


router.get('/product_details15', function(req, res) {
  res.render('product_details15');
});


router.get('/product_details16', function(req, res) {
  res.render('product_details16');
});

router.get('/product_details17', function(req, res) {
  res.render('product_details17');
});

router.get('/product_details18', function(req, res) {
  res.render('product_details18');
});

router.get('/login', function(req, res) {
  res.render('login');
});
 router.get('/about', function(req, res) {
  res.render('about');
});
  router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/search', function(req, res) {
  res.render('search');
});

router.get('/cart', function(req, res) {
  res.render('cart');
});

router.get('/checkout', function(req, res) {
  res.render('checkout');
});

router.get('/order_confirmation', function(req, res) {
  res.render('order_confirmation');
});
module.exports = router;
