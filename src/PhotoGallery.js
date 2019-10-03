import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Beers from './photos_and_videos/beers.jpeg'
import MeAndFan from './photos_and_videos/me_and_fan.jpeg'
import RichieAndLawson from './photos_and_videos/richie_and_lawson.jpeg'
import Watergate from './photos_and_videos/watergate.jpeg'
import Mlady from './photos_and_videos/mlady.jpeg'
import Balls from './photos_and_videos/balls.jpeg'
import DelfonsoMango from './photos_and_videos/delfonso_mango.jpeg'
import Guinness from './photos_and_videos/guinness.jpeg'
import './styles.css'

class PhotoGallery extends Component {
    render() {
        const images = [
            {
              original: `${Beers}`,
            },
            {
              original: `${MeAndFan}`,
            },
            {
              original: `${RichieAndLawson}`,
            },
            {
              original: `${Watergate}`,
            },
            {
              original: `${Mlady}`,   
            },
            {
              original: `${Balls}`,
            },
            {
              original: `${DelfonsoMango}`,
            }
          ];

        return (
            <div>
                <ImageGallery items={images} autoPlay slideInterval={4000} slideDuration={2000} />
            </div>
        );
    }
}

export default PhotoGallery;