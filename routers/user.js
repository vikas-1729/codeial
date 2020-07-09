const express=require('express');
const router=express.Router();
const controller=require('../controllers/user_controller');
const passport = require('passport');
const postRouter=require('./post');

router.get('/',controller.home);

router.get('/signIn',controller.signIn);
router.get('/signUp',controller.signUp);
router.post('/create',controller.create);

router.post('/create-session',passport.authenticate(
    'local',
    {failureFlash:true,failureRedirect:'/user'}),controller.createSession);
router.get('/signOut',controller.signOut);    

router.use('/post',postRouter);

router.use('/comment',require('./comment'));


module.exports=router;
