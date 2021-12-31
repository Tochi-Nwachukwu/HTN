import React, { useState } from 'react'
import Logo from '../images/htn_logo.png'
import hamburger from '../images/hamburger.png'
import { Link } from 'react-router-dom'


function NavBar() {

    const [open, setOpen] = useState(false)


    const openNav = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="w-full bg-[#271B63bb] py-4 flex sm:justify-around justify-between text-white ">
                <div style={{ backgroundImage: `url(${Logo})` }} className="ml-4 sm:ml-0 w-[82px] h-[31px]"></div>
                <ul className='hidden sm:flex items-center w-3/4  justify-around mx-8'>
                    <li >START HERE</li>
                    <li>OUR STORY</li>
                    <li>COACHING</li>
                    <li>SPEAKING</li>
                    <li>LET’S TALK</li>
                </ul>

                <div onClick={openNav} style={{ backgroundImage: `url(${hamburger})` }} className="mr-4 w-[24px] h-[24px] sm:hidden flex"></div>
            </div>
            {open && <ul className='sm:hidden flex flex-col justify-center items-center w-full  text-white py-8 bg-[#271B63bb] backdrop-blur'>
                <li className='my-4'>START HERE</li>
                <li className='my-4'>OUR STORY</li>
                <li className='my-4'>COACHING</li>
                <li className='my-4'>SPEAKING</li>
                <li className='my-4'>LET’S TALK</li>
            </ul>
            }


        </div>
    )
}

export default NavBar
