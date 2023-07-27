import Link from 'next/link';
import React from 'react'
import { MdLocationOn, MdOutlineMan4 } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="pt-36  px-44 ">
      <div className=" h-[278px] bg-[#181818] rounded-lg relative">
        <div className="absolute left-10 bottom-4">
          <img className="h-[328px] w-[289px]  " src="/Rectangle 12.png" alt="artist" />
        </div>

        <div className="flex flex-col items-center gap-2 justify-center">
          <p className="text-[#fff] text-[64px]">Arjit Singh</p>
          <div className="flex items-center gap-4 text-[#A1A1A1]">
            <div className="flex items-center gap-1 ">
              <MdOutlineMan4 />
              <p>Singer</p>
            </div>
            <div className="flex items-center gap-1">
              <MdLocationOn />
              <p>Mumbai,Maharashtra</p>
            </div>
          </div>
          <Link href="/addproduct" className="cursor-pointer py-5">
            <button className="bg-[#D9D9D9]/10 py-4 px-10 flex items-center gap-2 rounded-[41px]">
              <p>See Pricing & Book </p>
              <img src="/Union.png" alt="" />
            </button>
            {/* <img src="/Frame 1321314266.png" alt="" /> */}
          </Link>
        </div>

        <div className="absolute -right-20 -top-20 ">
          <img className="w-[207px] h-[208px]" src="/Group 1321314152.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero