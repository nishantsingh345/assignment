import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black border-t-2 border-[#E7CBBC] py-20 px-16">
      <div className="flex items-start justify-between text-white/50">
        <div className="space-y-3">
          <p className="font-bold">SELEBZ</p>
          <p>
            Selebz, is the first ever de-influencing platform, making <br /> reels that boosts your
            business.{" "}
          </p>
          <p>Sign up and we will get in touch as soon as possible</p>
          <input
            className="bg-transparent py-3 px-2 border-2 border-[#E7CBBC] rounded-xl"
            type="email"
            name="Email"
            id=""
            placeholder="Email Address"
          />
          <p>© 2023 by VINSM Globe Private Limited</p>
        </div>

        <div className="space-y-3 flex flex-col items-end">
          <p className="font-bold text-lg">BREWING UP CREATIVITY AT OUR STUDIO!</p>
          <div className="flex flex-col items-end">
            <p>E 48/4, Pocket - D, Okhla Phase - 2 </p>
            <p>New Delhi - 110020</p>
          </div>
          <div>
            <p>+91-7042884270</p>
            <p className="">
              <u> hola@selebz.com</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer