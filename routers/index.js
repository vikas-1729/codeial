const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const profile=require('./profile');
console.log("enter router");

router.get('/',homeController.home,homeController.home1);
router.get('/user',function(req,res){
    res.send("i am 2nd");

});
router.use('/profile',profile);
module.exports.check=router;