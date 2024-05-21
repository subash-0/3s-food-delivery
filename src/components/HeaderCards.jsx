
import { AiOutlineArrowRight } from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import{nepaliFoods} from "../assets/data1.js"
import { TbToolsKitchen2 } from 'react-icons/tb';
const HeaderCards = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000, pauseOnHover:true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 2000, pauseOnHover:true,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          arrow: false,
         
          autoplaySpeed: 2000, pauseOnHover:true,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrow: false,
          autoplaySpeed: 2000, pauseOnHover:true,
          cssEase: "linear",
        }
      }
    ]
  };
  return (
    <div className='max-w-[1640px] px-6 lg:px-10 py-4'>
      <div className='slider-container'>
      <Slider {...settings} arrows={false}>
      <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      </div>
      
        <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
            <div className='rounded-xl relative sm:w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl object-cover' src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      </Slider>
      </div>
      <div className='slider-container my-10'>
        <h1 className='text-xl px-3 text-orange-600 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl w-fit pb-4'>Nepali Food</h1>
        <Slider {...settings} arrows={false}>
          {
            nepaliFoods.map((food, index) =>(
              <div key={index} className='rounded-xl relative sm:w-60 h-36'>
              <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
              <p  className='font-bold text-2xl px-2 pt-4'>{food.title}</p>
              <p className='px-2 text-xl'>${food.price}</p>
              <p className='px-2 text-xl flex items-center gap-3'><TbToolsKitchen2 /> {food.restaurant}</p>
              <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
              </div>
              <img className='w-full h-full rounded-xl object-cover' src={food.picture} alt="/" />
            </div>
            ))
          }
          </Slider>
      </div>
    </div>
  )
}

export default HeaderCards
