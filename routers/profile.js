const express=require('express');

const router=express.Router();

const profileController=require('../controllers/profile_controller');

router.get('/',function(req,res){
    res.send("<h1> Enter profile</h1>");

});
router.get('/user',profileController.user);

router.get('/pic',profileController.pic);

module.exports=router;