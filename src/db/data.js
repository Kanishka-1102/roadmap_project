// const mongoose =require("mongoose");

// mongoose.connect("mongodb://localhost:27017/SignInData",{
//     // useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
//     useNew
// }).then(()=>{
//     console.log(`connection auccesful`);
// }).catch((e)=> {
//     console.log(`no connection`);
// })

const mongoose = require("mongoose");
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/loginn');
      console.log("run");
      
  }
  const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
  })


  const collection= new mongoose.model("Collection1",LogInSchema)
  
  module.exports=collection