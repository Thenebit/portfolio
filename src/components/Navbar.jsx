import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {
    FaHome,
    FaInfo,
    FaCode,
    FaTools
} from 'react-icons/fa'
import { Link } from 'react-scroll'
import Download from './Download'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='sticky top-0 flex justify-between bg-[#000300] items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'><span className='text-white'>Napaa </span>Samuel</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='p-4'>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='p-4'>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='p-3'> <Download /> </li>
            </ul>
            {/* Sidebar */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                {/* <AiOutlineMenu size={20} /> */}
            </div>
            {/* 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' */}
            <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[80%] h-[100%] bg-[#000300] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'><span className='text-white'>Napaa </span>Samuel </h1>

                {/* <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Skills</li>
                    <li className='p-4 border-b border-gray-600'>Projects</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'><Download /></li>
                </ul> */}
                <ul className='uppercase p-4'>
                    {[
                        { menu: 'Home', icon: <FaHome />, to: "home" },
                        { menu: 'Skills', icon: <FaTools />, to: "skills" },
                        { menu: 'Projects', icon: <FaCode />, to: "projects" },
                        { menu: 'About', icon: <FaInfo /> , to: "about"},
                    ].map((item, index) => (
                        <li key={index} className='p-4'>
                            <Link to={item.to}  className=' flex items-center'>
                                {item.icon}
                                <span className='ml-2'>{item.menu}</span>
                            </Link>
                        </li>
                    ))}
                    <li className='p-4 flex items-center'>
                        <Download />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;