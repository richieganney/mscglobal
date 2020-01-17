import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Alwyn from '../photos_and_videos/README.jpg'
import CanonTav from '../photos_and_videos/canonbury_tav.jpg'
import Merch from '../photos_and_videos/myddleton-outside-pub.jpg'
import Clyde from '../photos_and_videos/lord_clyde.jpg'
import DBA from '../photos_and_videos/de_beauvoir.jpeg'

class SocialInfo extends Component {
    render() {
        const alwynDirections = 'https://www.google.com/maps/place/The+Alwyne+Castle/@51.5465734,-0.100691,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b7cb54a073f:0xf3b273c99e9bd511!8m2!3d51.5465734!4d-0.0985023'
        const canonDirections = 'https://www.google.com/maps/place/The+Canonbury+Tavern/@51.544725,-0.0996777,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b631a936b87:0xb49d93aa26321bbd!8m2!3d51.544725!4d-0.097489'
        const wbcfDirections = 'https://www.google.com/maps/place/Myddleton+Arms/@51.5407055,-0.0979205,17z/data=!4m12!1m6!3m5!1s0x48761b6185658749:0xc4d0c4f61cfa4614!2sEssex+Road!8m2!3d51.5406288!4d-0.096279!3m4!1s0x48761b63da819fef:0x5917445bc36c70ef!8m2!3d51.5417365!4d-0.0976981'
        const clydeDirections = 'https://www.google.com/maps/place/The+Lord+Clyde/@51.5437509,-0.0921554,17z/data=!3m1!4b1!4m5!3m4!1s0x47d91328984e6d5b:0x5d3dc43d2e6d182f!8m2!3d51.5437476!4d-0.0899667'
        const dbaDirections = 'https://www.google.com/maps/place/De+Beauvoir+Arms/@51.5416582,-0.0873167,17z/data=!3m1!4b1!4m5!3m4!1s0x48761c9a2c906ee1:0xc5c6de7e7968e647!8m2!3d51.5416549!4d-0.085128'
        return (
            <div>
               <center><h1>Coming Soon</h1></center>
               <center><div><Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Alwyn} />
                    <Card.Body>
                        <Card.Title>1. Alwyn Castle</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href={alwynDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={CanonTav} />
                    <Card.Body>
                        <Card.Title>2. Canonbury Tavern</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href={canonDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Merch} />
                    <Card.Body>
                        <Card.Title>3. Warm Beer Cold Fire</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href={wbcfDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Clyde} />
                    <Card.Body>
                        <Card.Title>4. The Lord Clyde</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href={clydeDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={DBA} />
                    <Card.Body>
                        <Card.Title>5. DBA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <a href={dbaDirections}>Directions</a>
                    </Card.Body>
                </Card></div></center>
            </div>
        );
    }
}

export default SocialInfo;