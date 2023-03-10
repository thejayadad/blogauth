import React from 'react'
import "./featuredBlogs.css"

const FeaturedBlogs = () => {
  return (
    <section>
      <div className='category'>
        <div className='content'>
          <div className='box'>
            <div className='bx'>
              <img src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cat-img" />
            </div>
            <div className='overlay'>
              <h4>Category</h4>
              <p>Category Title Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs