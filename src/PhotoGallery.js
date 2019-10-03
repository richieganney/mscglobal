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
              thumbnail: `${Beers}`,
            },
            {
              original: `${MeAndFan}`,
              thumbnail: `${MeAndFan}`,
            },
            {
              original: `${RichieAndLawson}`,
              thumbnail: `${RichieAndLawson}`,
            },
            {
              original: `${Watergate}`,
              thumbnail: `${Watergate}`,
            },
            {
              original: `${Mlady}`,
              thumbnail: `${Mlady}`,
            },
            {
              original: `${Balls}`,
              thumbnail: `${Balls}`,
            },
            {
              original: `${DelfonsoMango}`,
              thumbnail: `${DelfonsoMango}`,
            },
            {
              original: `${Guinness}`,
              thumbnail: `${Guinness}`,
            },
          ];

        return (
            <div>
                <ImageGallery items={images} />
            </div>
        );
    }
}

export default PhotoGallery;