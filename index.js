const express=require('express');
const port = 8000;//when deploy  live it uses 80
const app=express();



app.listen(port,function(err){
    if(err){
        console.log(`Error :${err}`);
        return;
    }
    console.log(`We connect to our server port ${port}`);
    //interpolation method if there is something in{ it evaluate it

});