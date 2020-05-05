import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery';
import GetWeather from './GetWeather';
import Blogs from './Blogs';

class Homepage extends Component {
    render() {
        return (
            <div id="mscHeader">
                <PhotoGallery/>
                <h1 style={overlayStyle}>Here at the <span style={spanStyle}>MSC</span>, people are at the heart<br></br>of what we do</h1>
                <Blogs/>
            </div>
        );
    }
}

const overlayStyle = {
    position: 'absolute', /* Sit on top of the page content */
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    top: '100px',
    left: '30px',
    right: '0',
    bottom: '0',
    zIndex: '2', /* Specify a stack order in case you're using a different order for other elements */
    fontFamily: 'montserrat',
    fontWeight: 'bold'
}

const spanStyle = {
    color: '#7B67C9'
}

export default Homepage;