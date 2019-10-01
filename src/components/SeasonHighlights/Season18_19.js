import React, { Component } from 'react';
import Titanic from "../../team_photos/titanic.mp4"
import RacketGate from "../../team_photos/racketGate.mp4"
import brumbiesUpset from "../../team_photos/brumbiesUpset.mp4"

class Season18_19 extends Component {
    render() {
        return (
            <div>
                <h1>Some of the magic from the 2018/2019 season</h1>
                <div>
                    <video controls style={videoStyle}>
                    <source src={Titanic} type="video/mp4"></source>
                    </video>
                <p>Commonly dubbed the 'titanic rally', this feirce battle between Clive and Ned resulted in a draw, with both teams taking home a valubale point. As followers of the league will know, these two teams had to retire shortly after ths match. </p>
                </div><br></br>

                <div>
                    <video controls style={videoStyle}>
                    <source src={RacketGate} type="video/mp4"></source>
                    </video>
                <p>Ah racketgate. A lot of debate still surrounds the lack of punishment given to Rovers. Peter Brumby came under massive scrutiny following this event but thankfully game regulation has tightened since then.</p>
                </div>

                <div>
                    <video controls style={videoStyle}>
                    <source src={brumbiesUpset} type="video/mp4"></source>
                    </video>
                <p>Here is a video of the brumbies looking very sad after throwing away an absolute sitter.</p>
                </div>
            </div>
        );
    }
}

const videoStyle = {
    border: '10px inset #ddd',
    width: '170px',
    height: '285px'
}

export default Season18_19;