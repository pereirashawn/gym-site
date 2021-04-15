import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer () {
    return (
        <>

        <div className='footer-container'> 
            <div className='footer-links'>
                <div className='footer-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to="/" >About</Link>
                        
                        <Link to="/" >About</Link>
                        <Link to="/" >About</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to="/" >Contact</Link>
                        
                        <Link to="/" >Contact</Link>
                        <Link to="/" >Contact</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social</h2>
                        <Link to="/" >Social</Link>
                        
                        <Link to="/" >Social</Link>
                        <Link to="/" >Social</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;