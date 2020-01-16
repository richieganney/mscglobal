import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Alwyn from '../photos_and_videos/README.jpg'
import CanonTav from '../photos_and_videos/canonbury_tav.jpg'
import Merch from '../photos_and_videos/myddleton-outside-pub.jpg'
import Clyde from '../photos_and_videos/lord_clyde.jpg'
import DBA from '../photos_and_videos/de_beauvoir.jpeg'

class SocialInfo extends Component {
    render() {
        return (
            <div>
               <center><h1>Coming Soon</h1></center>
               <center><div><Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Alwyn} />
                    <Card.Body>
                        <Card.Title>Alwyn Castle</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={CanonTav} />
                    <Card.Body>
                        <Card.Title>Canonbury Tavern</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Merch} />
                    <Card.Body>
                        <Card.Title>Warm Beer Cold Fire</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Clyde} />
                    <Card.Body>
                        <Card.Title>The Lord Clyde</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={DBA} />
                    <Card.Body>
                        <Card.Title>DBA</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div></center>
            </div>
        );
    }
}

export default SocialInfo;