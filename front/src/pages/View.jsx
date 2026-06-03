import React, { useEffect,useState } from 'react'
import { use } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import DeleteButton from './DeleteButton'

function View() {
  const [posts, setPosts]=useState([])

  useEffect(()=>{
    axios.get("https://post-6yc4.onrender.com/posts")
.then((res)=>{
  setPosts(res.data.posts)
  console.log(res.data)
})
.catch((err)=>{
  console.log(err)
})
  },[])


  const handleDelete = async (id) => {
  try {
    await axios.delete(
      //  `http://localhost:3000/delete/${id}`
      `http://post-6yc4.onrender.com/delete/${id}`
    );

    setPosts(posts.filter(post => post._id !== id));

  } catch (err) {
    console.log(err);
  }
};

  

  return (
    <>
    <Navbar/>
    <h1 className='text-3xl font-bold text-center my-8'>posts</h1>
    <section className="max-w-4xl mx-auto grid gap-6 px-4">
      {
        posts.length >0 ? (
          posts.map((post)=>(
            <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="flex justify-end p-2">
  <DeleteButton onDelete={() => handleDelete(post._id)} />
</div>
            <img
  src={post.image}
  alt="img"
  className="w-full h-64 object-contain"
/>
            <p className="p-4 text-gray-700 text-lg">{post.caption} </p>

          </div>
        ))
          ):(<h1 className="text-center text-gray-500">no posts available</h1>)
      }
    </section>
    </>
  )
}

export default View