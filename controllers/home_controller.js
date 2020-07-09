const postModel=require('../modals/post');

module.exports.home=function(req,res){
    if(req.isAuthenticated()){
        postModel.find({}).populate('user')
        .populate({
            path:'comments',
            populate: {
                path:'user'
            }
        })
        .exec(function(err,post){
            if(err){
                console.log(`err ${err}`);
                return;
            }
            console.log('post',post);
            return res.render('home',{
                'title':'user',
                'posts':post
            });
        });
   }else{
    return res.redirect('/user/signIn');
    }
};