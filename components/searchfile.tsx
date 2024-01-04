// pages/index.tsx
import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/nextjs";
import { useState } from 'react';


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

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestedResults, setSuggestedResults] = useState<string[]>([]);
  const [disable, setdisable] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setdisable(value)
    console.log(disable)
    // Filter suggestions based on the input value
    const filteredResults = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestedResults(filteredResults);
  };

  const handleSuggestionClick = (value: string) => {
    setSearchTerm(value);
    setSuggestedResults([]);
  };

  return (
    <div >
   
      <div  >
        <Input className=" w-64" type="text" value={searchTerm} onChange={handleInputChange} placeholder='Search for Surah no with Name' />
       
        {setSearchTerm.length > 0 && disable.length>0 && (
            
          <div className="absolute text-white" >
            {suggestedResults.map((result, index) => (
              <div
                key={index}
                className=" z-10"
                onClick={() => handleSuggestionClick(result)}
              >
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
    
  );
};

export default Home;
