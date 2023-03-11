import React from 'react'
import "./featuredBlogs.css"


const FeaturedBlogs = () => {
  return (
    <section>
      <div className='featured-container'>
          <div className='profile'>
          <i class="fas fa-home"></i>
            <h2 className='profile-text'>Profile Name</h2>
          </div>
          <div className='category-container'>
            <h2>category Container</h2>
          </div>
          <div className='feature-container'>
            <h2>Feature category</h2>
          </div>
          <div className='footer'>
            <h2>Footer</h2>
          </div>
      </div>
    </section>
  )
}

export default FeaturedBlogs