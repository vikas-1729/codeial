const express=require('express');
const router=express.Router();
const controller=require('../controllers/post_controller');
const passport=require('passport');

router.post('/create',controller.createPost);
router.get('/delete:id',controller.destroy);

module.exports=router;