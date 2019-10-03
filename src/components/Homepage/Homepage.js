import React, { Component } from 'react';
import Fixtures from './Fixtures'
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

export default Homepage;