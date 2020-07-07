const express=require('express');
const router=express.Router();
const controller=require('../controllers/user_controller');
const passport = require('passport');
router.get('/',controller.home);

router.get('/signIn',controller.signIn);
router.get('/signUp',controller.signUp);
router.post('/create',controller.create);

router.post('/create-session',passport.authenticate(
    'local',
    {failureFlash:true,failureRedirect:'/user'}),controller.createSession);
router.get('/signOut',controller.signOut);    
module.exports=router;
