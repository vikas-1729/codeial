const postModel=require('../modals/post');
const commentModel=require('../modals/comment');


module.exports.createComment= function(req,res){
    if(req.isAuthenticated()){
        commentModel.create({
            content:req.body.comment,
            user:req.user['_id'],
            post:req.query['post-id']
        },async function(err,comment){
            if(err){
                return;
            }
            let post= await postModel.findById(req.query['post-id']);
            await post.comments.push(comment['_id']);
            post.save();

            console.log(post);
            return res.redirect('/');
                
            
            
        });
    }else{
        console.log('okk');
        res.redirect('/');
    }
};