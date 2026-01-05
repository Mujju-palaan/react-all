import AddTodo from '@/components/11)Todos-RTK/AddTodo'
import Todos from '@/components/11)Todos-RTK/Todos'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen justify-self-center '>
        <AddTodo />
        <Todos />
    </div>
  )
}

export default page