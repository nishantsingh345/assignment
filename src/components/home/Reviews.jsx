import Link from "next/link";
import React from "react";
import { FaDotCircle, FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="py-16 px-16">
      <p className="font-bold text-[36px] text-[#FFFFFF]">Featured Ratings & Reviews</p>
      <div className="flex items-center justify-between gap-6 py-10">
        <div className="bg-[#181818] py-4 px-5 rounded-lg w-full h-[268px]">
          <div className="space-y-3">
            <p className="text-[40px] text-[#D9D9D9]/10">,,</p>
            <div className="text-[#D9D9D9] flex items-center gap-2">
              <p>Shamita Dubey</p>
              <FaDotCircle size={10} />
              <p>Booked Artist on 24 Apr 2023</p>
            </div>
            <p className="font-semibold text-[#FFFFFF] text-[20px]">
              “Thankful to starclicnh for seamless booking and <br /> the best quotations available.
              Artist lit up our <br /> evening with a soulful performance
            </p>
            <div className="flex items-end justify-end">
              <img src="/Union.png" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-[#181818] py-4 px-5 rounded-lg h-[268px] relative">
            <div className="space-y-3">
              <div className="text-[#D9D9D9]">
                <p className="font-bold text-[36px] text-[#FFFFFF]">100% Value for Money</p>
                <p>Based on 93 Reviews</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <p className="text-[24px] text-[#F88E41]">4.5</p>
                  <FaStar className="text-[#F88E41]" />
                  <span className="text-[#D9D9D9] text-[18px]">Live Performance</span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[24px] text-[#F88E41]">4.5</p>
                  <FaStar className="text-[#F88E41]" />
                  <span className="text-[#D9D9D9] text-[18px]">Live Performance</span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[24px] text-[#F88E41]">4.5</p>
                  <FaStar className="text-[#F88E41]" />
                  <span className="text-[#D9D9D9] text-[18px]">Live Performance</span>
                </div>
              </div>

              <img src="/" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10 pb-4">
        <Link href="/addproduct" className="cursor-pointer">
          <button className="bg-[#D9D9D9]/10 py-4 px-10 flex items-center gap-2 rounded-[41px]">
            <p>See Pricing & Book </p>
            <img src="/Union.png" alt="" />
          </button>
        </Link>
      </div>
      <p className="text-center text-[#7A7979]">Get quotes within 5 mins !</p>
    </div>
  );
};

export default Reviews;
