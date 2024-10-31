import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

function Landing() {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
    </React.Fragment>
  )
}

export default Landing