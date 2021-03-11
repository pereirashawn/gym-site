import React from 'react'
import {Button} from './Button'
import './MainSection.css'
import '../App.css'

function MainSection() {
    return (
        <>

        <div className="main-container">
            <h1>FITNESS AWAITS</h1>
            <p>What are you waiting for?</p>
            <video src='/videos/treadmill-run.mp4' autoPlay loop muted />
            <div className="main-btns">
                <Button 
                    className="btns"
                    buttonSize="btn--large" 
                    buttonStyle="btn--primary"
                >
                    GET STARTED <i class="fas fa-running"></i>

                </Button>
            </div>
        </div>
        </>
    )
}

export default MainSection

