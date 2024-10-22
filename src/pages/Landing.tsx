import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'

function Landing() {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Features />
    </React.Fragment>
  )
}

export default Landing