
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState,useEffect } from "react";
import React, { useContext } from 'react';
import { ThemeContext } from '@/app/(dashboard)/layout';
interface MyContextType {
  number: number;
  setnumber: React.Dispatch<React.SetStateAction<number>>;
  voice: string;
  setvoice: React.Dispatch<React.SetStateAction<string>>;
}
const Reciter = () => {
    // const [array,setarray]=useState<any>(["ar.abdulazizazzahrani","ar.abdulbariaththubaity","ar.abdulbarimohammed","ar.abdulbasitmujawwad","ar.abdullahbasfar","ar.abdullahkhayat","ar.abdullahkhulaifi","ar.bandarbalila","ar.benkirane","ar.alafasy"]);
    const {number ,setnumber,voice,setvoice}=React.useContext<MyContextType | any>(ThemeContext);

    const [array, setarray] =useState<any | undefined>(undefined)
    useEffect(() => {
        const fun=async()=>{
            await fetch("https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json").then(async(found)=>{
              
                 setarray(await found.json());
                console.log("asfasf",array)
            })
        }
        fun();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[] )
    const changevoice=(e:any)=>{
      setvoice(e)
      
    }
    
    return <div>
        <Select onValueChange={changevoice}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Qira'at" />
  </SelectTrigger>
  <SelectContent>
    {array && array.map((e:any)=>{return <SelectItem  key={e.identifier} onClick={changevoice} value={e.identifier}>{e.identifier}</SelectItem>})}
    
    
  </SelectContent>
</Select>


    </div>;
}



export default Reciter;

