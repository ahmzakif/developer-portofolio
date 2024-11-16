"use client";

import Image from "next/image";
import React from "react";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/images/Me.png"
            height={250}
            width={250}
            alt="Ahmad Zaki Firdaus"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Ahmad Zaki Firdaus!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={50}
            width={50}
            alt="Ahmad Zaki Firdaus"
          />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
        Passionate AI Engineer specializing in machine learning and deep learning, 
        focused on creating efficient, impactful AI solutions. I am also deeply 
        interested in IoT, exploring how interconnected devices can enhance the way we live and work.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window?.open('/docs/Ahmad_Zaki_Firdaus-Resume.pdf', '_blank')}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
