import React, { Component } from 'react';
import '../../styles.css'
import Titanic from "../../photos_and_videos/season18_19_highlights/titanic.mp4";
import RacketGate from "../../photos_and_videos/season18_19_highlights/racketGate.mp4";
import brumbiesUpset from "../../photos_and_videos/season18_19_highlights/brumbiesUpset.mp4";
import ottersVmangos from "../../photos_and_videos/season18_19_highlights/ottersVmangos.mp4";
import EsamPackersFinal from "../../photos_and_videos/season18_19_highlights/esam_packers_final.mp4";
import PackersBrumbies from "../../photos_and_videos/season18_19_highlights/packers_brumbies.mp4";
import TitanicWithMusic from "../../photos_and_videos/season18_19_highlights/titanic_with_music.mp4";
import finalRallyVid from "../../photos_and_videos/season18_19_highlights/final_rally_2.mp4";
import PackersBrumbiesPic from "../../photos_and_videos/season18_19_highlights/packers_brumbies_pic.png";
import EsamPackersFinalPic from "../../photos_and_videos/season18_19_highlights/esam_packers_final_pic.png";
import ottersVmangosPic from "../../photos_and_videos/season18_19_highlights/otters_mangos_pic.png";
import brumbiesUpsetPic from "../../photos_and_videos/season18_19_highlights/brumbies_upset_pic.png";
import titanicVidPic from "../../photos_and_videos/season18_19_highlights/titanic_vid_pic.png";
import racketGatePic from "../../photos_and_videos/season18_19_highlights/racket_gate_pic.png";
import TitanicWithMusicPic from "../../photos_and_videos/season18_19_highlights/titanic_with_music_pic.png";
import finalRallyPic from "../../photos_and_videos/season18_19_highlights/final_rally_2.png";

class Season18_19 extends Component {
    render() {

        return (
            <div>
                
                  <h1>Some of the magic from the 2018/2019 season</h1>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={finalRallyVid} >
                        <img className="videoThumb" src={finalRallyPic}></img></a>
                        </figure>
                        <h2>Playoff Final - Rovers v Esampdoria</h2>
                        <p>One of the many fine rallies from the final. What a fantastic end to a fantastic season. Both teams fought incredibly hard but Rovers came out on top to win the MSC South West Division 3 title.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={Titanic} >
                        <img className="videoThumb" src={titanicVidPic}></img></a>
                        </figure>
                        <h2>Titanic Rally</h2>
                        <p>Commonly dubbed the 'titanic rally', this fierce battle between Clive and Ned resulted in a draw, with both teams taking home a valubale point. As followers of the league will know, these two teams sadly had to retire shortly after ths match. </p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={RacketGate}>
                        <img className="videoThumb" src={racketGatePic}></img></a>
                        </figure>
                        <h2>Racketgate</h2>
                        <p>Ah Racketgate. A lot of debate still surrounds the lack of punishment given to Rovers. Peter Brumby came under massive scrutiny following this event but thankfully game regulation has tightened up since then.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={brumbiesUpset}>
                        <img className="videoThumb" src={brumbiesUpsetPic}></img></a>
                        </figure>
                        <h2>Sad Brumbies</h2>
                        <p>Here is a video of Brumbies looking very sad after throwing away an absolute sitter.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={ottersVmangos}>
                        <img className="videoThumb" src={ottersVmangosPic}></img></a>
                        </figure>
                        <h2>Watergate</h2>
                        <p>Otters V Mangos. This is to remind fans of Watergate, a much more horrific and well known situation than Richard Nixon's Watergate. Unfortunately this is not actual footage of Watergate.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={EsamPackersFinal}>
                        <img className="videoThumb" src={EsamPackersFinalPic}></img></a>
                        </figure>
                        <h2>Build up</h2>
                        <p>Build up to the Esam v Packers playoff final.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={PackersBrumbies}>
                        <img className="videoThumb" src={PackersBrumbiesPic}></img></a>
                        </figure>
                        <h2>Packers v Brumbies</h2>
                        <p>Packers v Brumbies final point.</p>
                  </article>

                  <article className="video" style={articleStyle}>
                        <figure>
                        <a className="fancybox fancybox.iframe" href={TitanicWithMusic}>
                        <img className="videoThumb" src={TitanicWithMusicPic}></img></a>
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