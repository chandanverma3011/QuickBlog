import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FeaturedStrip from '../components/FeaturedStrip'
import TrendingSidebar from '../components/TrendingSidebar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <FeaturedStrip/>
    <div className='mx-8 sm:mx-16 xl:mx-24 flex gap-8'>
      <div className='flex-1'>
        <Bloglist/>
      </div>
      <TrendingSidebar/>
    </div>
    <Newsletter/>
    <Footer/>

    </>
  )
}

export default Home