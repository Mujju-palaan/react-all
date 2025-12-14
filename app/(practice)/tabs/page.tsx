import React from 'react'
import Tabsection from '../../../components/1)tabs/Tabsection'
import TabsCard from '@/components/1)tabs/TabsCard'

const pages = () => {
  return (
    <div className='m-8 bg-blue-100'>
      <div className='p-4'></div>
      <TabsCard />
      <div className='p-4'></div>
      <Tabsection />
    </div>
  )
}

export default pages