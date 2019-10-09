import React, { Component } from 'react';
import Fixtures from './Fixtures'
import PhotoGallery from './PhotoGallery';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Fixtures/>
                <PhotoGallery/>
                <h1 style={overlayStyle}>Here at the <span style={spanStyle}>MSC</span>, people are at the heart<br></br>of what we do</h1>
            </div>
        );
    }
}

const overlayStyle = {
    position: 'absolute', /* Sit on top of the page content */
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    top: '100px',
    left: '250px',
    right: '0',
    bottom: '0',
    zIndex: '2', /* Specify a stack order in case you're using a different order for other elements */
    fontFamily: 'montserrat',
    fontWeight: 'bold'
}

const spanStyle = {
    color: '#65BFCA'
}

export default Homepage;