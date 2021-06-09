import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { TiTimes , TiShoppingCart } from 'react-icons/ti';
import Logo from './logo.png'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const Togle = () =>setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return (
        <nav id="navbar">
            <div className="navbar">
                <Link to="/" className="logo" onClick={closeMobileMenu}><img src={Logo} alt=""/></Link>
                <div className="items">
                    <ul className={click ? "Navlinks active" : "Navlinks"} >
                        <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
                        <li><Link to='/cart' className='cart' onClick={closeMobileMenu}><TiShoppingCart/></Link></li>
                    </ul>
                </div>
                <button className="hamburger" onClick={Togle} >{(click ? <TiTimes/> : <RiBarChartHorizontalLine/> )}</button>
            </div>

        </nav>
    )
}

export default Navbar;
