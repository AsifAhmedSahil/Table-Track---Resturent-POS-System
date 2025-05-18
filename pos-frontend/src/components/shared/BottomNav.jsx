import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineBorderAll, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import {useNavigate} from "react-router-dom"

const BottomNav = () => {

  const navigate = useNavigate()
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around h-16">
      <button onClick={()=>navigate("/")} className="text-[#f5f5f5] cursor-pointer bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center">
        <FaHome className="inline mr-4" size={20} />
        <p>Home</p>
      </button>
      <button onClick={()=>navigate("/orders")} className="text-[#f5f5f5] cursor-pointer w-[200px] rounded-[20px] flex items-center justify-center">
        <MdOutlineBorderAll className="inline mr-4" size={20} />
        <p>Orders</p>
      </button>
      <button onClick={()=>navigate("/tables")} className="text-[#f5f5f5] cursor-pointer w-[200px] rounded-[20px] flex items-center justify-center">
        <MdTableBar className="inline mr-4" size={20} />
        <p>Tables</p>
      </button>
      <button className="text-[#f5f5f5] cursor-pointer w-[200px] rounded-[20px] flex items-center justify-center">
        <CiCircleMore className="inline mr-4" size={20} />
        <p>More</p>
      </button>

      <button className="absolute bottom-9 cursor-pointer bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
