import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a passionate AI engineer, I thrive on the intricate balance between logic and innovation. 
          Currently immersed in the dynamic field of artificial intelligence, my expertise lies in 
          machine learning, object detection, and image classification, where I seamlessly integrate 
          cutting-edge technologies with impactful solutions. I am also deeply interested in IoT, 
          exploring how interconnected devices can enhance intelligent systems.
          <br />
          <br />
          With a fervor for crafting intelligent solutions, I navigate the ever-evolving landscape 
          of artificial intelligence and IoT. My journey involves translating concepts into robust 
          machine learning models, advancing object detection and image classification systems, and 
          constantly pushing the boundaries of innovation in AI and IoT.
        </p>
      </div>
    </section>
  );
};

export default About;
