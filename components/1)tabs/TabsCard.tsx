import Card from './Card'
import { products } from '@/app/data/TabsData'

const TabsCard = () => {
  return (
    <div className='p-8 shadow-2xl transform-border transform-3d rounded-2xl flex gap-4 
    justify-self-center text-center bg-amber-50'>
        {products.map((item)=>(
          <Card 
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          />
        ))}
    </div>
  )
}

export default TabsCard