import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row flex-wrap mt-7">
          <Link
            href="https://youtu.be/nZXAyHOcGLk"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] sm:w-[50%]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project/stayAwakeProject.png"
                height={99}
                width={150}
                alt="Ahmad Zaki Firdaus - AI Project"
                className="rounded-lg h-[99px] w-[150px]"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">StayAwake</p>
                <p className="text-gray-500 text-[10px]">
                  Developed android application for realtime monitoring of drivers conditions
                  such as fatigue and drowsiness.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.zonafarm.site/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] sm:w-[50%]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project/ZonaFarmProject.png"
                height={99}
                width={150}
                alt="Ahmad Zaki Firdaus - AI Project"
                className="rounded-lg h-[99px] w-[150px]"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Zona Farm</p>
                <p className="text-gray-500 text-[10px]">
                Developed an image classification system to monitor 
                chicken health, enhancing accuracy in poultry farming.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.metrotvnews.com/play/b2lCren7-gamaforce-kembali-juara-umum-di-krti-2023"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] sm:w-[50%]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project/GamaforceProject.png"
                height={99}
                width={150}
                alt="Ahmad Zaki Firdaus - IoT Project"
                className="rounded-lg h-[99px] w-[150px]"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Gamaforce
                </p>
                <p className="text-gray-500 text-[10px]">
                Developed Autopilot Systems for various UAV, Quadrotor, 
                Fixedwing, and Hybrid VTOL Plane.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://cloud.wg.ugm.ac.id/category/g-connect/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] sm:w-[50%]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project/GConnectProject.png"
                height={99}
                width={150}
                alt="Ahmad Zaki Firdaus - IoT Project"
                className="rounded-lg h-[99px] w-[150px]"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">G-Connect</p>
                <p className="text-gray-500 text-[10px]">
                Developed an Early Warning System to detect landslides 
                and floods in disaster-prone areas.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
