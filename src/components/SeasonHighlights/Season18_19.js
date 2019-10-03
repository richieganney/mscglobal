import React, { Component } from 'react';
import '../../styles.css'
import Titanic from "../../photos_and_videos/titanic.mp4";
import RacketGate from "../../photos_and_videos/racketGate.mp4";
import brumbiesUpset from "../../photos_and_videos/brumbiesUpset.mp4";
import ottersVmangos from "../../photos_and_videos/ottersVmangos.mp4";
import EsamPackersFinal from "../../photos_and_videos/esam_packers_final.mp4";
import PackersBrumbies from "../../photos_and_videos/packers_brumbies.mp4";
import TitanicWithMusic from "../../photos_and_videos/titanic_with_music.mp4";
import vid1 from "../../photos_and_videos/vid1.png";
import vid2 from "../../photos_and_videos/vid2.png";
import vid3 from "../../photos_and_videos/vid3.png";
import vid4 from "../../photos_and_videos/vid4.png";
import vid5 from "../../photos_and_videos/vid5.png";
import vid6 from "../../photos_and_videos/vid6.png";
import vid7 from "../../photos_and_videos/vid7.png";

class Season18_19 extends Component {
    render() {

        return (
            <div>
                
                  <h1>Some of the magic from the 2018/2019 season</h1>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={Titanic} >
                        <img className="videoThumb" src={vid5}></img></a>
                        </figure>
                        <h2>Titanic Rally</h2>
                        <p>Commonly dubbed the 'titanic rally', this fierce battle between Clive and Ned resulted in a draw, with both teams taking home a valubale point. As followers of the league will know, these two teams had to retire shortly after ths match. </p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={RacketGate}>
                        <img className="videoThumb" src={vid6}></img></a>
                        </figure>
                        <h2>Racketgate</h2>
                        <p>Ah racketgate. A lot of debate still surrounds the lack of punishment given to Rovers. Peter Brumby came under massive scrutiny following this event but thankfully game regulation has tightened since then.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={brumbiesUpset}>
                        <img className="videoThumb" src={vid4}></img></a>
                        </figure>
                        <h2>Sad Brumbies</h2>
                        <p>Here is a video of the brumbies looking very sad after throwing away an absolute sitter.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={ottersVmangos}>
                        <img className="videoThumb" src={vid3}></img></a>
                        </figure>
                        <h2>Watergate</h2>
                        <p>Otters V Mangos. This is to remind fans of Watergate, a much more horrific and well known situation than Nixon's Watergate. Unfortunately this is not actual footage of Watergate.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={EsamPackersFinal}>
                        <img className="videoThumb" src={vid2}></img></a>
                        </figure>
                        <h2>Build up</h2>
                        <p>Build up to the Esam v Packers playoff final.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={PackersBrumbies}>
                        <img className="videoThumb" src={vid1}></img></a>
                        </figure>
                        <h2>Packers v Brumbies</h2>
                        <p>Packers v Brumbies final point.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={TitanicWithMusic}>
                        <img className="videoThumb" src={vid7}></img></a>
                        </figure>
                        <h2>Titanic Rally (with music)</h2>
                        <p>The fantastic 'titanic rally' with actual titanic music.</p>
                  </article>
            </div>
        );
    }
}

const articleStyle = {
    height: '400px'
}

export default Season18_19;