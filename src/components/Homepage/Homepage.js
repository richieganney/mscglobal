import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery';
import GetWeather from './GetWeather';
import Blogs from './Blogs';

class Homepage extends Component {
    render() {
        return (
            <div id="mscHeader" key='mcsHeader'>
                <PhotoGallery/>
                <h1 className='homepage-header'>Here at the <span className='homepage-span'>MSC</span>, people are at the heart<br></br>of what we do</h1>
                <div className='blog-list-style'>
                <h1>READ</h1>
                <Blogs/>
                </div>
            </div>
        );
    }
}

export default Homepage;