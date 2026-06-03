const mongoose=require('mongoose')

async function DbConnection(){
 await mongoose.connect(process.env.MONGODB_URI)
 console.log("connected to db")
}
module.exports=DbConnection;