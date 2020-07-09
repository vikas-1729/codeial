const mongoose =require('mongoose');

const PostSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ]
},{
    timestamps:true
});

const post=mongoose.model('postModel',PostSchema);
module.exports=post;