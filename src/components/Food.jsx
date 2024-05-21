
import { useState } from "react";
import {data} from "../assets/data.js"
const Food = () => {
    const [food, setFood] = useState(data);

    //// Filter by burger and pizza
    const filterType = (type) => {
        setFood(
            data.filter((item) =>{ 
                return item.category === type
            }
        )
    );
    }

    //// Filter by price
    const filterPrice = (price) => {
        setFood(data.filter((item) =>{ 
           return item.price === price
        }));
    }




    const buttonStyle = 'border-orange-600 text-orange-600 px-3 rounded-lg text-center border hover:bg-orange-600 hover:text-white hover:drop-shadow-lg py-1 duration-300';
  return (
    <div className='max-w-[1640px] mx-auto lg:px-12 px-4 p-4'>
    <h1 className='text-orange-400  font-bold text-3xl sm:text-4xl text-center'>Top Rated Menu Items</h1>


    <div className='flex flex-col  lg:flex-row justify-between'>
        <div >
            <p className='font-bold  text-gray-700'>Filter Type:</p>
            <div className=' flex justify-between flex-wrap my-2 gap-2'>
                
            <button className={buttonStyle} onClick={()=>setFood(data)}>All</button>
                <button className={buttonStyle} onClick={()=>filterType('burger')}>Burgers</button>
                <button className={buttonStyle} onClick={()=>filterType('pizza')}>Pizza</button>
                <button className={buttonStyle} onClick={()=>filterType('salad')}>Salads</button>
                <button className={buttonStyle} onClick={()=>filterType('chicken')}>Chickens</button>
            </div>

        </div>
        <div>
            <p className='font-bold  text-gray-700'>Filter Price</p>
            <div className='flex gap-2 items-center my-2'>
                <button className={buttonStyle} onClick={()=>filterPrice('$')}>$</button>
                <button className={buttonStyle} onClick={()=>filterPrice('$$')}>$$</button>
                <button className={buttonStyle} onClick={()=>filterPrice('$$$')}>$$$</button>
                <button className={buttonStyle} onClick={()=>filterPrice('$$$$')}>$$$$</button>
                
                
            </div>
        </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {food.map((item) =>(
            <div key={item.id} className='border  shadow-lg hover:scale-105 rounded-lg'>
                <img src={item.image} alt={item.name} className='w-full h-[150px] object-cover rounded-t-lg'/>
                <div className="flex justify-between px-2 py-2 items-center gap-1">
                    <p className='font-bold text-gray-700'>{item.name}</p>
                    <p className='bg-orange-600 h-fit w-fit  text-white rounded-full px-2 font-semibold'>{item.price}</p>
                </div>
            </div>
        ))}
    </div>


    </div>
  )
}

export default Food
