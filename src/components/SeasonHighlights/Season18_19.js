import React, { Component } from 'react';
import Titanic from "../../photos_and_videos/titanic.mp4"
import RacketGate from "../../photos_and_videos/racketGate.mp4"
import brumbiesUpset from "../../photos_and_videos/brumbiesUpset.mp4"
import ottersVmangos from "../../photos_and_videos/ottersVmangos.mp4"
import EsamPackersFinal from "../../photos_and_videos/esam_packers_final.mp4"
import PackersBrumbies from "../../photos_and_videos/packers_brumbies.mp4"
import TitanicWithMusic from "../../photos_and_videos/titanic_with_music.mp4"

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

                <div>
                    <video controls style={videoStyle}>
                    <source src={ottersVmangos} type="video/mp4"></source>
                    </video>
                    <p>Otters V Mangos. This is to remind fans of Watergate, a much more horrific situation than the more commonly known Watergate during Nixons administration. Unfortunately this is not actual footage of watergate.</p>
                </div>

                <div>
                    <video controls style={esamPackersStyle}>
                    <source src={EsamPackersFinal} type="video/mp4"></source>
                    </video>
                    <p>Build up to the Esam v Packers playoff final.</p>
                </div>

                <div>
                    <video controls style={videoStyle}>
                    <source src={PackersBrumbies} type="video/mp4"></source>
                    </video>
                <p>Packers v Brumbies final point.</p>
                </div>

                <div>
                    <video controls style={videoStyle}>
                    <source src={TitanicWithMusic} type="video/mp4"></source>
                    </video>
                <p>The fantastic 'titanic rally' with actual titanic music.</p>
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

const esamPackersStyle = {
    border: '10px inset #ddd',
    width: '172px',
    height: '106px'
}

export default Season18_19;