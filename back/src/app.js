const express=require('express')
const multer=require('multer')
const uploadFile=require('./services/storage.services')
const postModel=require("./models/post.model")
const cors=require('cors')
const app=express()


app.use(express.json())
app.use(cors())
const upload=multer({storage:multer.memoryStorage()})

app.post('/create-post' , upload.single("image") ,async(req,res)=>{
  // console.log(req.body)
  // console.log(req.file)
 const result = await uploadFile(req.file);
  const post=await postModel.create({
    image:result.url,
    caption:req.body.caption

  })
  return res.status(201).json({
    message:"posted",
    post
  })
})




app.get('/posts', async(req,res)=>{
  const posts= await postModel.find()

  res.status(200).json({
    message:"post feched",
    posts
  })
})


app.delete('/delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    await postModel.findOneAndDelete({
      _id:id
    })
    res.status(200).json({
      message:" post deleted"
    })

  }
  catch(e){
    res.status(500).json({
          message:e.message
    })


  }

})

module.exports=app;