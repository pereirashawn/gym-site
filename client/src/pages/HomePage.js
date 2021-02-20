import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <> 
            <h1>HOME PAGE</h1>

            <Link to="/signup">Signup</Link>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis mi at purus tempus, non mollis lacus bibendum. Mauris tristique accumsan nunc sodales posuere. Praesent a convallis elit, sit amet pellentesque tellus. Vestibulum consequat elit quam, at scelerisque augue imperdiet vitae. Praesent libero orci, egestas vitae dapibus eu, ultricies vel sapien. Sed aliquet tellus vel leo rhoncus dignissim. In non condimentum magna, id molestie justo.
            </p>

            <p>
                Donec efficitur lobortis nisi sed porta. Phasellus semper massa vel odio lacinia, id fringilla velit vulputate. Nunc nec nibh quis urna gravida tempus in in elit. Mauris quis scelerisque erat. Phasellus ut sapien ultricies, imperdiet elit vel, accumsan arcu. Etiam dapibus in tellus ac luctus. Ut pellentesque libero vel nulla posuere dapibus. Nulla facilisi.
            </p>

            <p>
                Donec laoreet viverra diam, at euismod nibh faucibus lobortis. Pellentesque maximus lacus non neque posuere, a placerat justo vehicula. Nullam eu finibus dui. Vestibulum in eros sem. Nulla augue lectus, maximus eu laoreet id, fringilla sit amet purus. Nullam consequat porta dui in iaculis. Vivamus sit amet diam sed odio laoreet interdum. Nam vestibulum viverra volutpat. Praesent posuere id ipsum at lobortis. Donec ut posuere sem, eget lobortis lorem.
            </p>
        </>
    )
}

export default HomePage;