const postModel =require('../modals/post');
const commentModel=require('../modals/comment');

module.exports.createPost=function(req,res){
    if(req.isAuthenticated()){
        postModel.create({
            content:req.body.post,
            user:req.user['_id']
        },function(err,post){
            if(err){
                console.log( `error ${err}`);
                return;
            }
            console.log('submiited');
            return res.redirect('/');
        });
        
    }else{
        return res.redirect('/');
    }
};

module.exports.destroy=function(req,res){
    postModel.findById(req.params.id,async function(err,post){
        if(err){
            return;
        }
        if(post&&post.user==req.user.id){
            await post.remove();
            
            commentModel.deleteMany({post:req.params.id},function(err){
                if(err){
                    return;
                }
                console.log("deleted");
                res.redirect('/');

            });
        }else{
            res.redirect('/');
        }
    });
};