import Link from 'next/link';
import React from 'react'

const Performance = () => {
  return (
    <div className="py-4 px-28">
      <div className="shadow-gray-700 shadow-2xl rounded-t-full px-32 py-20">
        <div className="border border-white/10 rounded-t-full p-10">
          <div className="borde2  rounded-t-full">
            <div className="p-20">
              <p className="text-center text-[48px]">Performance Details</p>

              <div className="">
                <div className="flex items-center gap-16 py-10 justify-around text-white/50">
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] text-[#EB794A]">0</p>
                    <p className="py-2">Off-stage Performers</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] text-[#EB794A]">60-90 min</p>
                    <p className="py-2">Perormance Duration</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] text-[#EB794A]">1</p>
                    <p className="py-2">Performing Memeber</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center gap-16 py-10 justify-evenly text-white/50">
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] text-[#EB794A]">Can Travel</p>
                    <p className="py-2">nationwide</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] text-[#EB794A]">Hindi</p>
                    <p className="py-2">Performing languages</p>
                  </div>
                </div>
              </div>

              <Link href="" className="pt-16 pb-6 flex items-center justify-center">
                <img src="/secondframe.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance