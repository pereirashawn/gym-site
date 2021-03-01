import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css'

function NavBar() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const [button,setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 950) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize',showButton)

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo">
                        BeFit <i class="fas fa-dumbbell"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                SignUp
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

                </div>
            </nav>
        </>
    )
}

export default NavBar