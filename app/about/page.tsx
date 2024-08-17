import React from 'react'
import Layout from '../Components/Layout'
import Link from 'next/link'
const About = () => {
  return (
    <Layout>
      <div className='flex justify-center gap-4 items-center min-h-[80vh]'>
        <h1>About Page</h1>
        <p>Check out these awesome projects!</p>
        <Link className='px-2 py-1 gap-2 bg-[#693B93]' href={"/contact"}>Contact Us</Link>
      </div>
    </Layout>
  )
}

export default About