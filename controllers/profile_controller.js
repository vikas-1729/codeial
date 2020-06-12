module.exports.user=function(req,res){
   res.render('home',{
       'title':'Vikas',
       'info':'I am viewing'
   });
};
module.exports.pic=function(req,res){
    res.send('<h1>Yes change the pic</h1>');
};