import Link from "next/link";
import React from "react";
import { MdOutlineMan4, MdLocationOn } from "react-icons/md";
// import { FaLocationPin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="py-32  px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className=" w-[60%]">
          <img className="w-[398px] h-[451px] absolute" src="/Rectangle 12.png" alt="artist" />
          <img className="relative left-80 pt-96" src="/Group 1321314152.png" alt="" />
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex  gap-4 w-full">
            <p className="text-[#fff] text-[64px]">Arjit Singh</p>
            <div className="flex items-center gap-4 text-[#A1A1A1] pt-6">
              <div className="flex items-center gap-1 ">
                <MdOutlineMan4 />
                <p>Singer</p>
              </div>
              <div className="flex items-center gap-1">
                <MdLocationOn />
                <p>Mumbai,Maharashtra</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 border-2 border-[#D7D7D7] px-4">
            <div className="border-r-2  border-[#D7D7D7] py-4 text-[18px]">
              <p className="pr-6">
                <span className="text-[#EB794A]">63 Enquiries </span>made in last 24 Hrs
              </p>
            </div>
            <p className="pl-2">
              <span className="text-[#EB794A]">Recently booked </span>on 13 June
            </p>
          </div>

          <div>
            <p className="py-4 text-white/60 text-justify">
              Renowned for his super hits, Arijit Singh is now the talk of the town because <br />
              of his golden voice and stellar performances!
            </p>
          </div>

          <Link href="" className="cursor-pointer">
            <img src="/Frame 1321314266.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
