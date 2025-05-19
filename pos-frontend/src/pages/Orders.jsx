import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/order/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
   const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] flex flex-col">
      <div className="px-10 py-4 flex items-center justify-between mt-2">
        <div className="flex items-center gap-4">
          <BackButton/>
          <h1 className="text-[#f5f5f5] text-2xl tracking-wider font-bold">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button onClick={()=>setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="all" && "bg-[#383838] "}`}>
            All
          </button>
          <button onClick={()=>setStatus("progress")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="progress" && "bg-[#383838] "}`}>
            In Progress
          </button>
          <button onClick={()=>setStatus("ready")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="ready" && "bg-[#383838] "}`}>
            Ready
          </button>
          <button onClick={()=>setStatus("completed")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="completed" && "bg-[#383838] "}`}>
            Completed
          </button>
        </div>
      </div>

      <div className="px-10 py-4 grid grid-cols-3 gap-3 overflow-y-scroll scrollbar-hide mb-10">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
