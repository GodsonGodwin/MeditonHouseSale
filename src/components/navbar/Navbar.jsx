import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'
import mediton from '../../assets/mediton.png'

const Navbar = () => {

    const[click, setClick] = useState(false);
const expand = () => setClick(!click);

  return (
    <div className='navbar'>
        <div className='container'>
        <img src={mediton} alt='Brand Logo'/>
            <h1>Mediton<span>Estate </span></h1>
            <button className='btn'> Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Search</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='expand'  onClick={expand} >
                {click ? (<FaRegTimesCircle className ='icon'/>) : (<HiOutlineMenuAlt4 className ='icon'/>)}
            </div>
        </div>

    </div>
  )
}

export default Navbar