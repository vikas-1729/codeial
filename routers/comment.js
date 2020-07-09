const express= require('express');
const router=express.Router();
const controller =require('../controllers/comment_controller');


router.post('/create',controller.createComment);

module.exports=router;