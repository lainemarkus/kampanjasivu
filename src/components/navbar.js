import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <h3 className="monospace">#OSANASUUREMPAA</h3>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />       
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Koti
                            </Link>
                        </li>    
                        <li className='nav-item'>
                            <Link to='/test' className='nav-links' onClick={closeMobileMenu}>
                                Testaa tietosi
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                                Usein kysyttyä
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                                Tietoa koronavirusrokotteesta
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}