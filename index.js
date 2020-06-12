const express=require('express');
const port = 8000;//when deploy  live it uses 80
const app=express();
const router=require('./routers/index');
//taking express layout;
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.use('/',router.check);
//setting view engine
app.set('view engine','ejs');
app.set('views','./views');//seeting views folder
app.listen(port,function(err){
    if(err){
        console.log(`Error :${err}`);
        return;
    }
    console.log(`We connect to our server port ${port}`);
    //interpolation method if there is something in{ it evaluate it

});