
"use client"

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React from 'react';
import { createContext, useState  } from 'react'
interface MyContextType {
    number: number;
    setnumber: React.Dispatch<React.SetStateAction<number>>;
    voice: string;
    setvoice: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const ThemeContext = React.createContext<MyContextType|any>(undefined);

const Dashboard = ({children}:{children:React.ReactNode}) => {
    const [number, setnumber] = useState(0)
    const [voice, setvoice] = useState("ar.alafasy")
    return <ThemeContext.Provider value={{number,setnumber,voice,setvoice}}>
        <div className='bg-[#011111]'>
        <div className="h-full relative">
        
        <main >
            <Navbar/>
            {children}
        </main>
    </div>


    </div>
    </ThemeContext.Provider>
}



export default Dashboard;