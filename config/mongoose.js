//export mongoose 
const mongoose=require('mongoose');
//trying to connect to db
mongoose.connect('mongodb://localhost/Social_Express_db');
//checking for connection
const db=mongoose.connection;
//if conection not succesful
db.on('error',console.error.bind(console,'not connectes=d'));
//if connection is succesfull
db.once('open',function(){
    console.log("wow connnected to db");

});
module.exports=db;