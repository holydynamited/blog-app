import React from 'react'
import { Link } from 'react-router-dom'

 const Home = () => {
   const posts = [
        {
          id:1, 
          title:"Lorem ipsum dolor sit amet",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          img:"https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id:2,
          title:"Lorem ipsum dolor sit amet",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          img:"https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id:3,
          title:"Lorem ipsum dolor sit amet",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          img:"https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id:4,
          title:"Lorem ipsum dolor sit amet",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          img:"https://images.pexels.com/photos/33866528/pexels-photo-33866528.jpeg"
        },
      ]
  return (
    <div className='home'>
     <div className="posts">
        {posts.map(post => (
          <>
          <div className="post" key={post.id}>
            <div className="img">
              <img  src={post.img} alt="" />
            </div>
            
          
          <div className="content">
            <Link className='link' to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
             <p>{post.desc}</p>
            <button>Read More</button>
            </div>
          </div>
          </>
        ))}
     </div>
        
      
    </div>
  )
}

export default Home
