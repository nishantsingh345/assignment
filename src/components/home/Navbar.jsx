import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-[#E7CBBC] space-x-48 px-8 text-[FFFFFF] bg-black">
      <div className="border-r-2 border-[#E7CBBC] pr-10">
        <p className="py-6 pr-10 font-bold text-2xl">
          <em>StarClinch</em>
        </p>
      </div>
      <div className="">
        <div className="flex items-center justify-between font-bold text-2xl gap-8  py-6">
          <p>Celebrity</p>
          <p>Join Community</p>
          <p>About Us</p>
        </div>
      </div>
      <div className="border-l-2 border-[#E7CBBC]">
        <p className="py-6  font-bold text-2xl pl-12">Book Your Celebrity</p>
      </div>
    </div>
  );
}

export default Navbar