import React from 'react'
import Tabsection from '../../../components/tabs/Tabsection'
import TabsCard from '@/components/tabs/TabsCard'

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