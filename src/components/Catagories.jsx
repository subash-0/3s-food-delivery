
import {categories} from '../assets/data.js'
const Catagories = () => {
    console.log(categories)
  return (
    <div className='max-w[1640px] px-4 md:px-10 py-12 m-auto'>
     <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
        {categories.map((item) =>(
            <div key={item.id} className='bg-gray-100 rounded-lg  p-4 flex justify-between items-center cursor-pointer hover:drop-shadow-md'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img src={item.image} alt={item.title} className='w-20 h-15' />
                
            </div>
        
        ))}
     </div>
    </div>
  )
}

export default Catagories
