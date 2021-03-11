import React from 'react'
import HighlightItems from './HighlightItems'
import './Highlights.css'

function Highlights () {
    return (

        <>
            <div className="highlights">
                <div className="highlights-container">
                    <div className="highlights-wrapper">
                        <ul className="highlights-item">
                            <HighlightItems
                                src="/images/img-1.jpg"
                                alt="equipment"
                                text="Best in class Equipments"
                                path="/"
                            />
                            <HighlightItems
                                src="/images/nutrition.jpg"
                                alt="equipment"
                                text="Nutritional support"
                                path="/"
                            />
                            <HighlightItems
                                src="/images/trainer.jpg"
                                alt="equipment"
                                text="Personal Trainer"
                                path="/"
                            />
                            <HighlightItems
                                src="/images/crossfit.jpg"
                                alt="equipment"
                                text="CrossFit Training"
                                path="/"
                            />
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights;