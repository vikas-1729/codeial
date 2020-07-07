const express=require('express');
const port = 8000;//when deploy  live it uses 80
const app=express();
const router=require('./routers/index');
//taking express layout;
//seting our db
const db=require('./config/mongoose');
//const expressLayouts=require('express-ejs-layouts');
//app.use(expressLayouts);
//setting our static folder
app.use(express.static('./assest'));
// if i want to set link as variable
//app.set('layout extractStyles',true);
//app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');//seeting views folder
app.use(express.urlencoded());
const passport=require('passport');
const LocalStrategy=require('./config/passport-local');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);
const flash=require('connect-flash');
//const { setAuthenticationUser } = require('./config/passport-local');

app.use(cookieParser());

app.use(session(
    {
        name:'auth-id',
        secret:'s.ramanujan1729',
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:(1000*60*60)
        },
        store:new MongoStore(
            {
                mongooseConnection:db,
                autoRemove:'disabled'
            },function(err){
                console.log(err||'success');
            }
        )

    }
));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(passport.setAuthenticationUser);

app.use('/',router);
//setting view engine
app.listen(port,function(err){
    if(err){
        console.log(`Error :${err}`);
        return;
    }
    console.log(`We connect to our server port ${port}`);
    //interpolation method if there is something in{ it evaluate it

});