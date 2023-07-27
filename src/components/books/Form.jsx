import React from 'react'
import Input from '../Input';

const Form = () => {
  return (
    <div className=" pt-10 pb-20 px-44 ">
      <div className="bg-[#181818] p-6 rounded-lg relative">
        <div className="">
          <p className="text-[36px] text-[#fff]">Best Special Pricing</p>
          <p className="text-[18px] text-[#fff]/70">Get quotes on whatsApp</p>
        </div>
        <div className="py-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="w-full">
                <Input label="Your First Name" id="name" type="text" />
              </div>
              <div className="w-full">
                <Input label="Your Last Name" id="name" type="text" />
              </div>
            </div>
            <div className="w-full">
              <Input label="Your E-mail" id="name" type="text" />
            </div>
            <div className="w-full">
              <Input label="Your Phone Number" id="name" type="text" />
            </div>
            <div className="w-full">
              <textarea
                required
                name="description"
                placeholder="Description"
                className="block px-6 pt-6 pb-1 rounded-md bg-[#101010] text-white  focus:outline-none focus:ring-0 appearance-none peer text-[16px] w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center pt-10">
            <button className="bg-[#D9D9D9]/10 py-4 px-10 flex items-center gap-2 rounded-[41px] ">
              <p>Book with best price </p>
              <img src="/Union.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bg-[#101010] rounded-full h-28 w-28 bottom-40 right-[48%] "></div>
    </div>
  );
}

export default Form