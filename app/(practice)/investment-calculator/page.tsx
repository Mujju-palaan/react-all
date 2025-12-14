'use client'
import { useState } from 'react'
import Form from '@/components/3)investment-calculator/Form'
import Header from '@/components/3)investment-calculator/Header'
import TableData from '@/components/3)investment-calculator/TableData'

interface UserInputType {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}
const InvestmentCalculator = () => {
    const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <section className='bg-zinc-900'>
      <div className='justify-self-center items-center text-center p-5'>
          <Header />
          <p className='pt-8'></p>
          <Form userInput={userInput} setUserInput={setUserInput}/>
          <p className='pt-4'></p>
          <TableData userInput={userInput}/>
      </div>
    </section>
  )
}

export default InvestmentCalculator