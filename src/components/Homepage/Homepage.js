import React, { Component } from 'react';
import Fixtures from './Fixtures'
import Beers from '../../photos_and_videos/beers.jpeg'
import MeAndFan from '../../photos_and_videos/me_and_fan.jpeg'
import RichieAndLawson from '../../photos_and_videos/richie_and_lawson.jpeg'
import Watergate from '../../photos_and_videos/watergate.jpeg'
import Mlady from '../../photos_and_videos/mlady.jpeg'
import Balls from '../../photos_and_videos/balls.jpeg'
import DelfonsoMango from '../../photos_and_videos/delfonso_mango.jpeg'
import Guinness from '../../photos_and_videos/guinness.jpeg'
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