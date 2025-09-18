import React from 'react'


const Menu = () => {
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
    <div className='menu'>
    <h1>Other posts you may like</h1>
    {posts.map(post => (
        <div className="post"
         key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
         </div>
    ))}
    </div>
  )
}

export default Menu
