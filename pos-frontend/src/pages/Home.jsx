import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { FaSackDollar } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex">
      {/* left */}
      <div className="flex-[3] ">
        <Greetings />
        <div className="flex gap-3 px-8 mt-5">
            <MiniCard title="Total Earnings" number="512" footerNum="1.6" icon={<FaSackDollar/>}/>
            <MiniCard title="In Progress" number="310" footerNum="2.6" icon={<GiProgression/>}/>
            
        </div>
      </div>
      {/* right */}
      <div className="flex-[2] bg-[#1f1f1f]">
        fsdfdsf
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
