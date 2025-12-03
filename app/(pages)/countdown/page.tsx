import Header from '@/components/4)countdown/Header'
import Header1 from '@/components/4)countdown/Header1'
import Timer from '@/components/4)countdown/Timer'
import React from 'react'

const page = () => {
  return (
    <div className='bg-green-900 h-screen flex flex-col items-center justify-center'>
        <div className='bg-black rounded'>
        {/* <Header /> */}

        {/*  Header1 using Use Ref to set and display name */}
        <Header1 />

        <div className='flex flex-wrap justify-center'>
            <Timer 
                title='Easy'
                time={1} 
            />
            <Timer 
                title='Not Easy'
                time={5} 
            />
        </div>
        
        </div>
    </div>
  )
}

export default page