import React from 'react'
import Layout from '@/Components/Layout'
import Link from 'next/link'
const Contact = () => {
  return (
    <Layout>
      <div className='flex bg-purple-950 gap-4 justify-center items-center min-h-[80vh]'>
        <h1>Contact Page</h1>
        <p>Check out these awesome projects!</p>
        <Link className='px-2 py-1 gap-2 bg-[#693B93]' href={"/"}>Jump to Home</Link>
      </div>
    </Layout>
  )
}

export default Contact