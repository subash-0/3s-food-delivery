import React, { useState } from "react";
import { AiFillDownSquare, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbHeart, TbHelp, TbReportMoney, TbTruckDelivery, TbWallet } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";
import { IoArrowDownCircleOutline } from "react-icons/io5";

function Navbar() {
  const menus = [
    { name: "Orders", icons: <TbTruckDelivery size={25} className="mr-2" />},
    { name: "Favorites", icons: <TbHeart size={25}  className="mr-2 "/>},
    { name: "Wallet", icons: <TbWallet size={25} className="mr-2" />},
    { name: "Help", icons: <TbHelp size={25} className="mr-2" />,},
    { name: "Best One", icons: <IoArrowDownCircleOutline  size={25}  className="mr-2"/>},
    { name: "Promotions", icons: <TbReportMoney size={25} className="mr-2" />},
    { name: "Invites Friends", icons: <IoMdPeople size={25} className="mr-2" />},

  ];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-center">
        <div className="cursor-pointer ">
        <AiOutlineMenu size={15} onClick={()=> setShowMenu(!showMenu)} />
      </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl px-2 font-semibold">
        3S <span className="font-bold">FOOD</span>
      </h1>
      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[12px]">
        <p className="bg-black text-white rounded-full px-2 py-1">Delivery</p>
        <p className="px-2">PickUp</p>
      </div>
        </div>
        <div className="flex justify-center items-center gap-8">
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <input type="text" placeholder="Search Food ..." className="bg-transparent px-2 py-1 w-full focus:outline-none " />
            <AiOutlineSearch size={20} className="text-orange-500" />
           
        </div>
        <button  className="bg-black text-white hidden md:flex items-center py-1 px-3 rounded-full ">
            <BsFillCartFill size={20} className="mr-2" />
          Cart
        </button>
        </div>
        {/* mobile menu */}
        {showMenu && <div className="bg-black/80 fixed  w-full h-screen z-10 top-0 left-0">
        </div>}
        {/* sideDrawer menu  */}

        {showMenu && <div className="fixed top-0 left-0  w-56 h-screen bg-white  z-10 duration-300 drop-shadow-md">
              <AiOutlineClose size={25} onClick={()=>setShowMenu(!showMenu)} className="absolute right-2 top-2 bg-gray-400 text-white cursor-pointer rounded-full p-1 drop-shadow-sm hover:drop-shadow-md duration-150"  />
              <h2 className="text-2xl  p-2">3S <span className="font-bold">FOOD</span></h2>
              <nav>
                <ul className="flex flex-col p-4 gap-2 text-gray-800">
                  {menus.map((menu, index) => (
                     <li key={index} className=" py-2 px-2 font-bold flex items-center cursor-pointer duration-100 hover:bg-gray-200 rounded-lg hover:drop-shadow-md">{menu.icons} {menu.name} </li>
                   ))}
                 
                </ul>
              </nav>
        </div>}


    </div>
  );
}

export default Navbar;
