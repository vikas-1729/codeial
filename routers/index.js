const express= require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const userRouter=require('./user');

router.get('/',homeController.home);
router.use('/user',userRouter);


module.exports=router;