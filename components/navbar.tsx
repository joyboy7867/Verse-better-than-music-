/* eslint-disable react/no-unescaped-entities */

"use client"
import React, { useContext } from 'react';
import { Input } from "@/components/ui/input"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { ThemeContext } from '@/app/(dashboard)/layout';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
interface MyContextType {
    number: number;
    setnumber: React.Dispatch<React.SetStateAction<number>>;
    voice: string;
    setvoice: React.Dispatch<React.SetStateAction<string>>;
  }


const Navbar = () => {
    
    const {number ,setnumber,voice,setvoice}=React.useContext<MyContextType | any>(ThemeContext);
    const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
       
        let originalText=parseInt(e.target.value)
       
       setnumber(originalText) 
    }
    
    
    return <div className=" bg-green-500 flex items-center justify-end lg:h-14 md:h-14 h-16">
        
        <Image className="mr-auto ml-0 lg:w-52" alt='logo' width={150} height={150} src={"/logo.png"}/>
        <span className='mr-2'><UserButton afterSignOutUrl='/'/></span>
        
         <div className="w-64">
         
        <HoverCard>
        <HoverCardTrigger><Input onChange={onChange}  placeholder='Search Surah' /></HoverCardTrigger>
            <HoverCardContent>
                Search Surah According To Number 
                To find no use the below Search bar !
            </HoverCardContent>
            
        </HoverCard>

        </div>
    </div>;
}



export default Navbar;