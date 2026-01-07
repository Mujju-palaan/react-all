import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black m-8">
          <h1 className="text-4xl	text-center">React practice</h1>
          <ul className="list-decimal list-inside text-left">
            <li><Link href={`/Todos-RTK`}>Todos-RTK</Link></li>
            <li><Link href={`/feedback-project`}>Feedback Project</Link></li>
            <li><Link href={`/feedback-project`}>Feedback Project</Link></li>
    
          </ul>
          
        </div>
  )
}

export default page