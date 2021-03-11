import React from 'react'
import {Link} from 'react-router-dom'

function HighlightItems (props) {
    return (
        <>

        <div className="highlight-item">
            <Link className="highlight-item-link" to={props.path}>
                <figure className="highlight-item-image">
                    <img 
                        src={props.src}
                        alt={props.alt}
                        className="highlight-item-img-animate"
                    />
                </figure>
                <div className="highlight-item-info">
                    <h3 className="highlight-item-text">{props.text}</h3>
                </div>
            </Link>
        </div>

        </>
    )
}

export default HighlightItems;