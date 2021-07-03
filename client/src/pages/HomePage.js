import React from 'react'
//import {Link} from 'react-router-dom'
import MainSection from '../components/MainSection'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
//import {userList} from '../middleware/userList'


function HomePage () {
    
    return(
        <> 
            <NavBar/>
            <MainSection/>
            <Highlights />
            <Footer/>
        </>
    )
}

export default HomePage;