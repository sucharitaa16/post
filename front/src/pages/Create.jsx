import React, { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'






function Create() {

const handleSubmit= async(e)=>{
e.preventDefault()

const formData=new FormData(e.target)
axios.post("https://post-6yc4.onrender.com/create-post",formData)
.then((res)=>{
  alert("post created successfully")
  e.target.reset()
})
.catch((e)=>{
  console.log(e)
  alert("error to creating this post")
})
}

  return (
    <>
    <Navbar/>
    
    <h1 className='text-3xl font-bold text-center my-8'>Create Post</h1>
    <section className="create-post-section max-w-md mx-auto p-4">
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type='file' name="image" accept='image/*' 
         className="border p-2 rounded"
        />
        <input type='text'  name='caption' placeholder=' enter caption' required
        className='border p-2'
        />
        <button type='submit'
        className="bg-blue-500 text-white p-2 rounded"
        >submit</button>

      </form>
    </section>
    </>
  )
}

export default Create