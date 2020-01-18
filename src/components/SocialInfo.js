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
               <center><h1>Thursday 6th February</h1></center>
               <center><div><Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Alwyn} />
                    <Card.Body>
                        <Card.Title>1. Alwyn Castle</Card.Title>
                        <Card.Text>
                        With a name that sounds distinctly like a certain Wales and Lions legend, where better to start our pub crawl during the first week of the 6 Nations. This versatile boozer has a fantastic beer garden that during the festive season doubles up as the go-to place for Christmas trees. Rumour has it the boys at 358a Essex Road are hoping to get a decade’s worth of us out of their 2018 purchase.
                        </Card.Text>
                        <a href={alwynDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={CanonTav} />
                    <Card.Body>
                        <Card.Title>2. Canonbury Tavern</Card.Title>
                        <Card.Text>
                        ‘This sophisticated pub in a 19th-century building offers a British gastro menu and garden seating.’ Only a sporting league with such a rich history and level of class would be welcomed in such an establishment. Another versatile pub. Excellent food menu and an unrivalled beer garden attracts a more mature Islington crowd.
                        </Card.Text>
                        <a href={canonDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Merch} />
                    <Card.Body>
                        <Card.Title>3. Warm Beer Cold Fire</Card.Title>
                        <Card.Text>
                        Don’t be fooled by their misleading marketing, the fire is in fact warm and the beer cold. Out of all the establishments on tonight’s route, this is probably the least well known to the MSLD3 Committee. On our few visits here we have been warmly welcomed and enjoyed their delicious range of refreshments.
                        </Card.Text>
                        <a href={wbcfDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Clyde} />
                    <Card.Body>
                        <Card.Title>4. The Lord Clyde</Card.Title>
                        <Card.Text>
                        No Richie, we are not stopping at My Favourite Café for Veggie Breakfast Set 6. The Lord Clyde, such a good pub. A real mix of staff - from friendly James, to glorious barmaid, to very strange indeed moustache man. This pub in particular feels like a true local. Not quite as lively as some of its neighbouring watering holes but what it lacks in punters it makes up for in character.
                        </Card.Text>
                        <a href={clydeDirections}>Directions</a>
                    </Card.Body>
                </Card><br></br>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={DBA} />
                    <Card.Body>
                        <Card.Title>5. DBA</Card.Title>
                        <Card.Text>
                        Last but by no means least, the pub that needs no introduction and is the true home of the Mongols is the DBA. If the DBA did loyalty points the league’s beloved Mango would certainly be a Platinum Member. Expect continuous Guinness challenges and a frosty receptions from staff and locals alike.
                        </Card.Text>
                        <a href={dbaDirections}>Directions</a>
                    </Card.Body>
                </Card></div></center>
            </div>
        );
    }
}

export default SocialInfo;