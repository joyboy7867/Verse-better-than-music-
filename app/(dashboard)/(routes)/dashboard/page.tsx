/* eslint-disable @next/next/no-img-element */

"use client"




import { useEffect, useState } from 'react';
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import React, { useContext } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";


import { FaVolumeUp } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs';
import Home from '@/components/searchfile';
import { Divide } from 'lucide-react';
import { ThemeContext } from '@/app/(dashboard)/layout';
import axios from 'axios';
import  Reciter from '@/components/reciter';
import { Alert } from '@/components/ui/alert';
import { AlertDemo } from '@/components/alert';
interface MyContextType {
  number: number;
  setnumber: React.Dispatch<React.SetStateAction<number>>;
  voice: string;
  setvoice: React.Dispatch<React.SetStateAction<string>>;
}
const Page = () => {
  const [change, setchange] = useState(true);
  let a: HTMLAudioElement
  useEffect(() => {
     // eslint-disable-next-line react-hooks/exhaustive-deps
     a = document.getElementById("player") as HTMLAudioElement;
    
  })

  const forward=()=>{
    setnumber(number+1)
  }
  const reverse=()=>{
    setnumber(number-1)
  }
  
  

  const pauseAndPlay = async() => {
  
      
      
     
    if (a?.paused) {
      a?.play();
      setchange(false);
    } else {
      a?.pause();
      setchange(true);
    }
  };
  // const volumeup=()=>{
  //   a.volume=0.5
  // }
  const suggestions = [
    'Al-Fatihah (The Opening)=1',
    'Al-Baqara (The Cow)=2',
    'Aal-E-Imran (The Family of Imran)=3',
    'An-Nisa (The Women)=4',
    'Al-Ma\'idah (The Table Spread)=5',
    'Al-An\'am (The Cattle)=6',
    'Al-A\'raf (The Heights)=7',
    'Al-Anfal (The Spoils of War)=8',
    'At-Tawbah (The Repentance)=9',
    'Yunus (Jonah)=10',
    'Hud (Hud)=11',
    'Yusuf (Joseph)=12',
    'Ar-Ra\'d (The Thunder)=13',
    'Ibrahim (Abraham)=14',
    'Al-Hijr (The Rocky Tract)=15',
    'An-Nahl (The Bee)=16',
    'Al-Isra (The Night Journey)=17',
    'Al-Kahf (The Cave)=18',
    'Maryam (Mary)=19',
    'Ta-Ha=20',
    'Al-Anbiya (The Prophets)=21',
    'Al-Hajj (The Pilgrimage)=22',
    'Al-Muminun (The Believers)=23',
    'An-Nur (The Light)=24',
    'Al-Furqan (The Criterion)=25',
    'Ash-Shu\'ara (The Poets)=26',
    'An-Naml (The Ant)=27',
    'Al-Qasas (The Stories)=28',
    'Al-Ankabut (The Spider)=29',
    'Ar-Rum (The Romans)=30',
    'Luqman (Luqman)=31',
    'As-Sajda (The Prostration)=32',
    'Al-Ahzab (The Combined Forces)=33',
    'Saba (Sheba)=34',
    'Fatir (The Originator)=35',
    'Ya-Sin (Ya Sin)=36',
    'As-Saffat (Those who set the Ranks)=37',
    'Sad (The Letter Sad)=38',
    'Az-Zumar (The Troops)=39',
    'Ghafir (The Forgiver)=40',
    'Fussilat (Explained in Detail)=41',
    'Ash-Shura (The Consultation)=42',
    'Az-Zukhruf (The Gold Adornments)=43',
    'Ad-Dukhan (The Smoke)=44',
    'Al-Jathiya (The Crouching)=45',
    'Al-Ahqaf (The Wind-Curved Sandhills)=46',
    'Muhammad (Muhammad)=47',
    'Al-Fath (The Victory)=48',
    'Al-Hujurat (The Rooms)=49',
    'Qaf (The Letter Qaf)=50',
    'Adh-Dhariyat (The Winnowing Winds)=51',
    'At-Tur (The Mount)=52',
    'An-Najm (The Star)=53',
    'Al-Qamar (The Moon)=54',
    'Ar-Rahman (The Beneficent)=55',
    'Al-Waqi\'a (The Inevitable)=56',
    'Al-Hadid (The Iron)=57',
    'Al-Mujadila (The Pleading Woman)=58',
    'Al-Hashr (The Exile)=59',
    'Al-Mumtahina (She that is to be examined)=60',
    'As-Saff (The Ranks)=61',
    'Al-Jumu\'a (The Congregation, Friday)=62',
    'Al-Munafiqun (The Hypocrites)=63',
    'At-Taghabun (The Mutual Disillusion)=64',
    'At-Talaq (The Divorce)=65',
    'At-Tahrim (The Prohibition)=66',
    'Al-Mulk (The Sovereignty)=67',
    'Al-Qalam (The Pen)=68',
    'Al-Haaqqa (The Reality)=69',
    'Al-Ma\'arij (The Ascending Stairways)=70',
    'Nuh (Noah)=71',
    'Al-Jinn (The Jinn)=72',
    'Al-Muzzammil (The Enshrouded One)=73',
    'Al-Muddathir (The Cloaked One)=74',
    'Al-Qiyama (The Resurrection)=75',
    'Al-Insan (Man)=76',
    'Al-Mursalat (The Emissaries)=77',
    'An-Naba (The Tidings)=78',
    'An-Nazi\'at (Those who drag forth)=79',
    'Abasa (He frowned)=80',
    'At-Takwir (The Overthrowing)=81',
    'Al-Infitar (The Cleaving)=82',
    'Al-Mutaffifin (Defrauding)=83',
    'Al-Inshiqaq (The Splitting Open)=84',
    'Al-Burooj (The Mansions of the Stars)=85',
    'At-Tariq (The Morning Star)=86',
    'Al-Ala (The Most High)=87',
    'Al-Ghashiya (The Overwhelming)=88',
    'Al-Fajr (The Dawn)=89',
    'Al-Balad (The City)=90',
    'Ash-Shams (The Sun)=91',
    'Al-Lail (The Night)=92',
    'Adh-Dhuhaa (The Morning Hours)=93',
    'Ash-Sharh (The Relief)=94',
    'At-Tin (The Fig)=95',
    'Al-Alaq (The Clot)=96',
    'Al-Qadr (The Power, Fate)=97',
    'Al-Bayyina (The Evidence)=98',
    'Az-Zalzalah (The Earthquake)=99',
    'Al-Adiyat (The Chargers)=100',
    'Al-Qaria (The Calamity)=101',
    'At-Takathur (Competition for More)=102',
    'Al-Asr (The Declining Day)=103',
    'Al-Humazah (The Traducer)=104',
    'Al-Fil (The Elephant)=105',
    'Quraish (Quraish)=106',
    'Al-Ma\'un (Small Kindnesses)=107',
    'Al-Kawthar (Abundance)=108',
    'Al-Kafiroon (The Disbelievers)=109',
    'An-Nasr (The Help)=110',
    'Al-Masad (The Palm Fiber)=111',
    'Al-Ikhlas (The Purity)=112',
    'Al-Falaq (The Daybreak)=113',
    'An-Nas (Mankind)=114',
];

const {number ,setnumber,voice}=React.useContext<MyContextType | any>(ThemeContext);
    return <div >
      
      <span className='flex justify-end w-full'> <Home/> </span>
       
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 mt-24 lg:mt-0 justify-center items-center">
  
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
  {suggestions[number-1]}
    </h2>

    
    <img className="lg:w-1/2 lg:h-96 md:w-3/6 w-5/6  object-cover object-center  rounded" alt="hero" src="/back.jpg"/>
    
   <div className=" h-32 justify-center  flex flex-col bg-gray-500 rounded-lg w-full  lg:w-1/2 lg:mt-0  pt-0">
      <audio id='player' className="w-full mt-0 pt-0" controls src={`https://cdn.islamic.network/quran/audio-surah/128/${voice}/${number}.mp3`}>asfasf</audio>
      <div className='text-black flex gap-10 text-4xl mt-6 pb-2 justify-center '>
      {/* <span className='text-2xl  md:pr-16 lg:pr-20'><FaVolumeDown /></span> */}
     <span className="hover:text-3xl" onClick={reverse}><IoPlaySkipBackSharp/></span> 
      {/* <button onClick={pauseAndPlay}>{b?<FaPlay/>:<FaPause /> }</button> */}
      {change?<button onClick={pauseAndPlay}><FaPlay/></button>:<button onClick={pauseAndPlay}><FaPause /> </button>}
      
      <span className="hover:text-3xl" onClick={forward}><IoPlaySkipForward /></span>
      {/* <span onClick={volumeup} className='text-2xl md:pl-16 lg:pl-20'><FaVolumeUp /></span> */}
      

      </div>
      <Reciter/>
      
   </div>
   
   
   
  </div>
  <AlertDemo/>
</section>



  
 
  
  
  
  </div>
}



export default Page;