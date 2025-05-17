import React from "react";
import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6 mb-4">
      <button className="bg-[#f6b100] p-3 font-bold rounded-lg text-xl">
        AM
      </button>

      <div className="flex items-center justify-between w-[100%]">
        <div>
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Asif Ahmed</h1>
         <p className="text-[#ababab] text-sm">8items</p>
        </div>

        <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1">
          Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />{" "}
          3
        </h1>


        <div className="flex flex-col items-end gap-2">
          <div>
            <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
              <FaCheckDouble className="inline mr-2" /> Ready
            </p>
          </div>

          <div>
            <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg">
              <FaCircle className="inline mr-2" /> Ready to serve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
