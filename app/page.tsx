/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  
} from "@/utils/motion";
import { DrawerDemo } from '@/components/drawer';
const Page = () => {
  let a: HTMLVideoElement
 

  // useEffect(() => {
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //    a = document.getElementById("player") as HTMLVideoElement;
  //     a.play();
  // })
    return <motion.div  initial="hidden" animate="visible" ><section className="text-gray-600 body-font  bg-black">
      <Image className='mx-auto mb-0 mt-0 text-2xl ' alt='logo' width={200} height={0} src={"/logo.png"}/>
    <div className="container px-5 mx-auto flex flex-wrap">
      <div className="lg:w-2/3 mx-auto">
        <motion.div variants={slideInFromTop} className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img id='player'  className="w-full opacity-80 object-cover h-full object-center block opacity-2 absolute inset-0" src="/big.jpg"/>
          <div className="text-center relative z-10 w-full">
            <h1 className=" text-gray-900 font-extrabold  text-7xl mb-2">Verse</h1>
            
            <Button className="mr-2 mt-16 hover:w-22"><Link href={"/sign-in"}>Sign-In</Link></Button>
            <Button><Link href={"/sign-up"}>Sign-Up</Link></Button>
            
          </div>
          <div className="relative text-center z-10 w-full mt-4">
            <Button><Link href={"/dashboard"}>Go to Audio-Player </Link></Button>
         
          </div>
           <span className='relative z-10 m-auto mt-5'><DrawerDemo/></span>
          
        </motion.div>
        <div className="flex flex-wrap -mx-2">
          <motion.div variants={slideInFromRight(1)} className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" className="w-full object-cover h-full object-center block opacity-70 absolute inset-0" src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-black font-bold title-font mb-2">More Than 100 Qi`rat</h2>
                <p className="text-black leading-relaxed">Get the famous and the best Recitor</p>
                
              </div>
            </div>
          </motion.div>
          <motion.div variants={slideInFromLeft(1)} className="px-2 w-1/2">
            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
              <img alt="gallery" className="w-full object-cover h-full object-center block opacity-70 absolute inset-0" src="https://www.ucf.edu/wp-content/blogs.dir/20/files/2021/04/Ramadan-Celebration.jpg"/>
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-black font-bold title-font mb-2">Get All 114 Surah!!</h2>
                <p className=" text-black leading-relaxed">Find your Favourite Surah On Single Click</p>
              
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  
  </motion.div>
}



export default Page;
