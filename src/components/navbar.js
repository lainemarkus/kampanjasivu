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
                                <span className="lila">Koti</span>
                            </Link>
                        </li>    
                        <li className='nav-item'>
                            <Link to='/test' className='nav-links' onClick={closeMobileMenu}>
                            <span className="lila">Testaa tietosi</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                            <span className="lila">Usein kysyttyä</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                            <span className="lila">Tietoa koronavirusrokotteesta</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}