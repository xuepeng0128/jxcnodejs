//import {of} from "rxjs";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',(req,res,next)=>{
      // var a= of('a','b','c');
      // a.subscribe(re =>console.log(re));
     res.redirect('web/ddd.html')
});
module.exports = router;
