const mongoose=require('mongoose')

const postSchima=new mongoose.Schema({
  image:String,
  caption:String
})

const postModel=mongoose.model("post",postSchima)

module.exports=postModel