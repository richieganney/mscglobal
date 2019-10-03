import React, { Component } from 'react';
import Fixtures from './Fixtures'
import Background from '../../photos_and_videos/background.jpeg'
import PhotoGallery from '../../PhotoGallery';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Fixtures/>
                <PhotoGallery/>
            </div>
        );
    }
}

const backgroundStyle = {
    backgroundImage: `url(${Background})`
}

const imageStyle = {
    borderRadius: '8px',
    width: '400px',
    height: '400px',
    position: 'relative',
}

export default Homepage;