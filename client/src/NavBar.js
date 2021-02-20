import React from 'react'
import {Link} from 'react-router-dom'
import {MdFitnessCenter} from 'react-icons/md'
import {IconContext} from 'react-icons'
import './App.css';

const NavBar = () => (
    <nav>
        <ul>
            <li>
            <IconContext.Provider
                value={{ color: 'blue', size: '30px' , padding : '10px' }}
            >
                <MdFitnessCenter/>
            </IconContext.Provider>
            </li>

            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
        
       
       
    </nav>
)

export default NavBar;