module.exports.home=function(req,res,next){
    console.log("okk 1");
    next();
   // res.send("<h1>Complte</h1>")  
}
module.exports.home1=function(req,res){
    return res.send('<h1>Hloooo okk</h1>');
}