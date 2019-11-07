import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Beers from '../../photos_and_videos/homepage/beers.jpeg'
import MeAndFan from '../../photos_and_videos/homepage/me_and_fan.jpeg'
import RichieAndLawson from '../../photos_and_videos/homepage/richie_and_lawson.jpeg'
import Watergate from '../../photos_and_videos/homepage/watergate.jpeg'
import Balls from '../../photos_and_videos/homepage/balls.jpeg'
import DelfonsoMango from '../../photos_and_videos/homepage/delfonso_mango.jpeg'
import Titanic from '../../photos_and_videos/homepage/titanic.jpeg'
import Social from '../../photos_and_videos/homepage/social.jpeg'
import Mango from '../../photos_and_videos/homepage/mango_icecream.jpeg'
import '../../styles.css'

class PhotoGallery extends Component {
    render() {
        const images = [
            {
              original: `${Beers}`,
            },
            {
              original: `${Social}`
            },
            {
              original: `${Mango}`
            },
            {
              original: `${Titanic}`
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