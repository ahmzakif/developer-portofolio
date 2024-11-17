"use client";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                alt={social.alt}
                sizes="100vw"
                className="mx-5"
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
      © 2024 | Developed by 
      <Link target="_blank" href="https://www.linkedin.com/in/ahmzakif/" 
      className="text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"> ahmzakif </Link>
      using
      <Link
        target="_blank"
        href="https://nextjs.org/"
        className="inline-block align-middle pl-2"
        aria-label="Next.js"
      >
        <Image
          src="/icon/nextwhite.svg"
          alt="Next.js Logo"
          width={50}
          height={30}
          className="inline-block align-middle"
    />
  </Link>
      </p>
      
    </div>
  );
};

export default Footer;
