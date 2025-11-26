import Header from '@/components/countdown/Header'
import Header1 from '@/components/countdown/Header1'
import React from 'react'

const page = () => {
  return (
    <div className='bg-green-900 h-screen flex items-center justify-center'>
        {/* <Header /> */}
        
        {/*  Header1 using Use Ref to set and display name */}
        <Header1 />
    </div>
  )
}

export default page