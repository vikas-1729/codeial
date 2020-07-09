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

module.exports.destroy=function(req,res){
    commentModel.findById(req.params.id,async function(err,comment){
       if(err){
           return;
       }
       if(comment){
          // you can also use $pull:{comments:req.params.id} remember to use req.user.id and req.user_id
        let post_id=comment.post;
        let post = await postModel.findById(post_id);
        //let post_user_id=post.user;
        if(comment.user==req.user.id||post.user==req.user['id']){
            await comment.remove();
            let deleteIndex=0;
            for(let i=0;i<post.comments.length;i++){
                if(post.comments[i]==req.params.id){
                    console.log("find one");
                    deleteIndex=i;
                    break;
                }
            }
            post.comments.splice(deleteIndex,1);
            await post.save();
            return res.redirect('/');
     
        }else{
            return res.redirect('/');
        }

       }
       
       
   });
};