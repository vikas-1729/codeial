const passport= require('passport');
const LocalStrategy=require('passport-local').Strategy;
const userModel=require('../modals/user');
passport.use(new LocalStrategy(
    {
        usernameField:'email'
    },
    function(email,password,done){
        userModel.findOne({email:email},function(err,user){
            if(err){
               return  done(err);
            }
            if(!user){
               return done(null,false,{message:'this email is not registered'});
            }
            if(user.password!=password){
                 return done(null,false,{message:'password mismatch'});
            }
            return done(null,user);

        });
    }
));

passport.serializeUser(function(user,done){
    // what u want to save as cookie
    done(null,user['_id']);
});

passport.deserializeUser(function(id,done){
    userModel.findById(id,function(err,user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null,false);
        }
         return done(null,user);
    });
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return  next();
    }
    return res.redirect('/');
}

passport.setAuthenticationUser=function(req,res,next){
    res.locals.errorMessage=req.flash('error');
    res.locals.successMessage=req.flash('success');
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    return next();
};

module.exports=passport;