import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";
import {MdWhatshot} from "react-icons/md";
import { GiFamilyHouse } from 'react-icons/gi';
import { MdBedroomParent } from 'react-icons/md';
import { MdOutlinePool } from 'react-icons/md';
import { GiWoodCabin } from 'react-icons/gi';
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {IoBedOutline} from 'react-icons/io5';
import {FaTreeCity} from 'react-icons/fa6';
import {BiBuildingHouse} from "react-icons/bi";
import logo from "../assets/logo.png"
import {useNavigate} from "react-router-dom";

function Nav() {
    let [showpopup,setShowpopup] = useState(false)
    let navigate = useNavigate()
  return (
    <div>
        <div className='w-[100vw] min-h-[80px] border-b-1px border-[#dcdcdc] px-[20px] 
        flex items-center justify-between'>
            <div><img src={logo} alt="" className='w-[60px]'/></div>
            <div className='w-[35%] relative hidden md:block'>
                <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px]
                border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px]' placeholder=' Any Where| Any Location | Any City'/>
                <button className='absolute p-[10px] rounded-[50px] bg-[red]
                right-[3%] top-[5px]'><FiSearch className='w-[20px] h-[20px] text-[white]'/></button>
            </div>
            <div className='flex items-center justify-center gap-[10px] relative'>
                <span className='text-[18px] cursor-pointer rounded-[50px]
                hover:bg-[#ded9d9] px-[8px] py-[5px] hidden md:block '>List Your Home</span>
                <button className='px-[20px] py-[10px] flex items-center
                justify-center gap-[5px] border-[1px] border-[#8d8c8c]
                rounded-[50px] hover:shadow-lg'onClick={()=>setShowpopup(prev=>!prev)}>
                    <span><GiHamburgerMenu className='w-[20px] h-[20px]'/></span>
                    <span><CgProfile className='w-[23px] h-[23px]'/></span>
                    </button>
                    {showpopup && <div className='w-[220px] h-[250px] absolute bg-slate-50 top-[110%] 
                    right-[10%] border-[1px] border-[#aaa9a9] z-10 rounded-lg'>
                        <ul className='w-[100%] h-[100%] text-[17px] flex items-start
                        justify-around flex-col py-[10px]'>
<li 
  className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'
  onClick={() => navigate("/login")}
>
  LOGIN
</li>

                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>LOGOUT</li>
                            <div className='w-[100%] h-[1px] bg-[#c1c0c0] '></div>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>LIST YOUR HOME</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>MY LISTINGS</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointerf'>CHECK BOOKINGS</li>
                        </ul>
                    </div>}
            </div>
        </div>
        <div className='w-[100vw] h-[85px] bg-white flex items-center
        justify-center cursor-pointer gap-[40px]'>
            {/* 1st Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdWhatshot className='w-[30px] h-[30px] text-black'/>
                <h3>TRENDING</h3>
            </div>
            {/* 2nd Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <GiFamilyHouse className='w-[30px] h-[30px] text-black'/>
                <h3>VILLA</h3>
            </div>
            {/* 3rd Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdBedroomParent className='w-[30px] h-[30px] text-black'/>
                <h3>ROOMS</h3>
            </div>
            {/* 4th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdOutlinePool className='w-[30px] h-[30px] text-black'/>
                <h3>POOL HOUSE</h3>
            </div>
            {/* 5th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <GiWoodCabin className='w-[30px] h-[30px] text-black'/>
                <h3>CABINS</h3>
            </div>
            {/* 6th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black'/>
                <h3>SHOPS</h3>
            </div>
            {/* 7th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <IoBedOutline className='w-[30px] h-[30px] text-black'/>
                <h3>PG</h3>
            </div>
            {/* 8th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <FaTreeCity className='w-[30px] h-[30px] text-black'/>
                <h3>FARM HOUSE</h3>
            </div>
            {/* 9th Trending class */}
            <div className='flex items-center justify-center flex-col
            hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <BiBuildingHouse className='w-[30px] h-[30px] text-black'/>
                <h3>FLAT</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Nav