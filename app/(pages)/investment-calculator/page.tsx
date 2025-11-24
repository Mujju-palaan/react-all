import Form from '@/components/investment-calculator/Form'
import Header from '@/components/investment-calculator/Header'

const InvestmentCalculator = () => {
  return (
    <section className='bg-zinc-900'>
      <div className='justify-self-center items-center text-center p-5'>
          <Header />
          <p className='pt-8'></p>
          <Form />
      </div>
    </section>
  )
}

export default InvestmentCalculator