import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='box' >
        <Navbar />
        <main className='main'>

        <FeaturedBlogs />
        <Categories />

        </main>
      <Footer />

    </div>
  )
}

export default Home