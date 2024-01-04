import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { FaHome } from "react-icons/fa";
const Sidebar = () => {
    return <div>
        <div className=" border-solid flex mt-6 justify-center items-center flex-col gap-y-10  text-3xl">
            <FaHome  />
            <UserButton  afterSignOutUrl='/'/> 
            
        </div>
        
    </div>;
}



export default Sidebar;