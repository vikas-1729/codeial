const userModel=require('../modals/user');
const postModel=require('../modals/post');

module.exports.home=function(req,res){
     return res.redirect('/');
}

module.exports.signIn=function(req,res){
    if(!req.isAuthenticated()){
        return res.render('user_sign_in',{
            'title':'signIn'
        });
    }
    return res.redirect('/');
};

module.exports.signUp=function(req,res){
    if(!req.isAuthenticated()){
        return res.render('user_sign_up',{
            'title':'Sign up'
        });
    }
    return res.redirect('/');
};

module.exports.create=function(req,res){
    if(req.body.password===req.body.checkPassword){
        userModel.findOne({email:req.body.email},function(err,user){
            if(err){
                console.log(`okk err ${err}`);
                return;
            }
            if(user){
               console.log('no username created this email exist before');
               return res.redirect('back'); 
            }
            userModel.create(req.body,function(err,user){
                if(err){
                    console.log(`error occur ${err}`);
                    return ;
                }
    
                   res.redirect('/user/signIn');
            });

        });
           /* console.log("okk i am here");
            return res.redirect('back');*/
        
        
    }else{
     console.log('okk i am here');  
    return res.redirect('back');
    }
};

module.exports.createSession=function(req,res){
        res.redirect('/');
}
module.exports.signOut=function(req,res){
    if(req.isAuthenticated()){
        req.logout();
    }
    return res.redirect('/');
};

module.exports.profile= function(req,res){
   
    userModel.findById(req.params.id,function(err,user){
        if(err){
            return res.status(404).send('no authorization');
        }
        console.log('user',user);
        if(!user){
           return res.status(404).send('no authorization');
        }
        
       return res.render('profile',{
            'title':'Profile',
            'profile_user':user
        });
    });
    
};
module.exports.updateProfile=function(req,res){
    if(req.params.id==req.user.id){
        userModel.findOneAndUpdate({_id:req.params.id},{name:req.body.name},function(err,data){
            if(err){
                return;
            }
            return res.redirect('/');
        });
    }else{
        return res.redirect('/');
    }
};
