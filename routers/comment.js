const express= require('express');
const router=express.Router();
const controller =require('../controllers/comment_controller');
const passport=require('../config/passport-local');

router.post('/create',passport.checkAuthentication,controller.createComment);
router.get('/delete/:id',passport.checkAuthentication,controller.destroy);
module.exports=router;