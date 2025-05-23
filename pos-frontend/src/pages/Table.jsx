import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Table = () => {
    const [status,setStatus] = useState("all")
  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] flex flex-col">
      <div className="px-10 py-4 flex items-center justify-between mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl tracking-wider font-bold">
            Tables
          </h1>
        </div>
           <div className="flex items-center justify-around gap-4">
          <button onClick={()=>setStatus("all")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="all" && "bg-[#383838] "}`}>
            All
          </button>
          <button onClick={()=>setStatus("booked")} className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer ${status ==="booked" && "bg-[#383838] "}`}>
            Booked
          </button>
          
        </div>

      </div>
      <div className="px-10   py-4 flex flex-wrap justify-around gap-6 overflow-y-scroll scrollbar-hide mb-10">
        {
            tables.map((table)=>{
                return (
                    <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial}/>
                )
            })
        }
      </div>

      <BottomNav />
    </section>
  );
};

export default Table;
