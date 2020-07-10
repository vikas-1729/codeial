const postModel=require('../modals/post');
const userModel=require('../modals/user');
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
            userModel.find({},function(err,users){
                if(err){
                    return;
                }
                return res.render('home',{
                    'title':'user',
                    'posts':post,
                    'friends':users
                });

            });
           
            
        });
   }else{
    return res.redirect('/user/signIn');
    }
};