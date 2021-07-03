import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const ButtonStyles = ['btn--primary','btn--outline']
const ButtonSizes = ['btn--medium','btn--large']


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const setButtonStyle= ButtonStyles.includes(buttonStyle) ? buttonStyle : ButtonStyles[0];
    const setButtonSize = ButtonSizes.includes(buttonSize) ? buttonSize : ButtonSizes[0];

    return(
        <Link to="/signup" className="btn">
            <button 
            className={`btn ${setButtonStyle} ${setButtonSize}`}
            type={type}
            onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )

}