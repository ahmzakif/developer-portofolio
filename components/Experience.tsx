import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/Bangkit.svg"}
              height={30}
              width={30}
              alt={"Ahmad Zaki Firdaus - ML Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">StayAwake /</span> ML Engineer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Aug 2023 - Jan 2024, Remote
          </p>
        </div>

        <div className="text-gray-300 pt-5" style={{ textAlign: "justify" }}>
          <p style={{ textIndent: "2em" }}>
            During my participation in the prestigious Bangkit Academy, 
            a career readiness program designed by Google, Tokopedia, Gojek, and Traveloka, 
            I honed my skills as a Machine Learning Engineer. I collaborated with a 
            cross-functional team consisting of machine learning engineers, cloud computing 
            engineers, and a mobile developer to create an impactful capstone project.
          </p>
          <br />
          <p style={{ textIndent: "2em" }}>
            Our project focused on developing an Android-based application for real-time 
            monitoring of drivers. Using the Single Shot Detector (SSD) MobileNetV2 method, 
            we implemented a system capable of detecting driver distractions or abnormal 
            conditions such as fatigue and drowsiness. This experience not only enhanced my 
            technical expertise in deep learning and image processing but also strengthened 
            my leadership skills as I successfully guided the team to achieve our project objectives.
          </p>
        </div>

        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            TensorFlow
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PyTorch
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Object Detection
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
