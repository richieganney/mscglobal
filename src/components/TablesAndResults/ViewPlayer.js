import React from 'react';
import axios from 'axios';
import './player_profiles.css'
import Shorn from '../../photos_and_videos/all_teams/shorn_hub.jpeg';
import Brumbies from '../../photos_and_videos/all_teams/brumbies.jpeg';
import FiveClive from '../../photos_and_videos/all_teams/fiveclive.jpeg';
import Mangos from '../../photos_and_videos/all_teams/mangos.jpeg';
import NedJinks from '../../photos_and_videos/all_teams/nedjinks.jpeg';
import Packers from '../../photos_and_videos/all_teams/packers.jpeg';
import Rovers from '../../photos_and_videos/all_teams/rovers.jpeg';
import SeaOtters from '../../photos_and_videos/all_teams/seaotters.jpeg';
import Esampdoria from '../../photos_and_videos/all_teams/esampdoria.jpeg';
import Jimbok from '../../photos_and_videos/all_teams/jimbok.jpeg';
import Murf from '../../photos_and_videos/all_teams/bournmurf.jpeg';
import Chadrington from '../../photos_and_videos/all_teams/chadrington.jpeg';
import Muzzeldorf from '../../photos_and_videos/all_teams/muzzeldorf.jpeg';
import Cowracens from '../../photos_and_videos/all_teams/cowracens.jpeg';

import { MDBIcon } from 'mdbreact';

class ViewPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
        player: [],
        playerLoaded: false,
        name: '',
        description: '',
        role: '',
        rankings: '',
        quote: '',
        beer: '',
        byDay: '',
        socialLinks: '',
        pub: '',
        bestMoment: '',
        aspiration: '',
        bestFinish: ''
    };
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer(){
    const playerId = this.props.match.params.playerId
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet2!A${playerId}:M${playerId}?key=${process.env.REACT_APP_SHEETS_API_KEY}`
    axios.get(url)
    .then(res => {
        this.setState({ player: res.data.values,
                        name: res.data.values[0][0],
                        description: res.data.values[0][1],
                        role: res.data.values[0][2],
                        rankings: res.data.values[0][3],
                        socialLinks: res.data.values[0][4].split(','),
                        quote: res.data.values[0][5],
                        pub: res.data.values[0][6],
                        beer: res.data.values[0][7],
                        bestMoment: res.data.values[0][8],
                        aspiration: res.data.values[0][9],
                        byDay: res.data.values[0][10],
                        bestFinish: res.data.values[0][12],
                        playerLoaded: true,
        })
        console.log(this.state)
    })
    .catch(error => {
        console.log(error)
    })
    }

    splitData(data){
      return data.split()
    }

    winRate(){
        const status = this.props.location.state.played.toLowerCase()
        if(status.toLowerCase() === "retired" || status.toLowerCase() === "sitting out temporarily"){
            return (
            <p>rt ^</p>
            )
        }
        const { played, win } = this.props.location.state
        const finalNum = (Number(win)/Number(played)) * 100
        return `${Math.round(finalNum)}%`
    }

    pointsDropped(){
        const status = this.props.location.state.played.toLowerCase()
        if(status.toLowerCase() === "retired" || status.toLowerCase() === "sitting out temporarily"){
            return (
            <p>rt ^</p>
            )
        }
        const { played, points } = this.props.location.state
        const totalPoints = played * 3
        const finalNum = totalPoints - points
        return finalNum
    }

    averagePdPerGame(){
        const status = this.props.location.state.played.toLowerCase()
        if(status.toLowerCase() === "retired" || status.toLowerCase() === "sitting out temporarily"){
            return (
            <p>rt ^</p>
            )
        }
      const { played, pointsDifference } = this.props.location.state
      const average = pointsDifference / played
      if(average > 1){
          return `+ ${Math.round(average)}`
      } else {
          return `${Math.round(average)}`
      }
    }

    shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    style = (game) => {
        if(game == "W"){
            return { color: 'green', display: 'inline-block' }
        } else if(game === "D"){
            return { color: 'grey', display: 'inline-block' }
        } else {
            return { color: 'red', display: 'inline-block' }
        }
    }

    form(win, draw, loss, played) {
        if(played.toLowerCase() === "retired" || played.toLowerCase() === "sitting out temporarily"){
            return (
            <p>{this.state.name} is {played}</p>
            )
        }
        const arr = `${"W,".repeat(win)}${"D,".repeat(draw)}${"L,".repeat(loss)}`.split(",")
        arr.pop()
        if(arr.length == 0){
            return (
            <p>
            No data yet
            </p>
            )
        } else if(arr.length <= 5){
            const form = this.shuffle(arr)
            return form.map((game, index) => {
                return (
                <span><p key={index} style={this.style(game)}>{game}</p>{' '}</span>
                )
            });
        } else {
            this.shuffle(arr)
            const form = arr.slice(Math.max(arr.length - 5, 1))
            return form.map((game, index) => {
                return (
                <span><p key={index} style={this.style(game)}>{game}</p>{' '}</span>
                )
            });
        }
    }

  playerImage(){
    const { name } = this.state
    if(name == "The Greenberg Packers"){
        return Packers
    } else if(name == "Richie's Rovers"){
        return Rovers
    } else if(name == "Fortuna Müzzeldorf"){
        return Muzzeldorf
    } else if(name == "AFC Bournemurf"){
        return Murf
    } else if(name == "Chadrington Stanley"){
        return Chadrington
    } else if(name == "Brumbies"){
        return Brumbies
    } else if(name == "The Jimboks"){
        return Jimbok
    } else if(name == "Shorn Hub"){
        return Shorn
    } else if(name == "Alfonso Mango"){
        return Mangos
    } else if(name == "Esampdoria"){
        return Esampdoria
    } else if(name == "The Sea Otters"){
        return SeaOtters
    } else if(name == "Club Ned Ninks") {
        return NedJinks
    } else if(name == "BBC Radio 5 Clive") {
        return FiveClive
    } else if(name == "Cowracens"){
        return Cowracens
    }
    else {
        return Mangos
    }
  }

  render() {
    const { name, description, role, rankings, quote, beer, pub, aspiration, bestMoment, byDay, socialLinks, bestFinish } = this.state
    const { played, win, draw, loss, pointsDifference, points } = this.props.location.state
    return (
        <div>
          {this.state.playerLoaded ? 
                <div>
                <div class="container emp-profile">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img
                            src={this.playerImage()} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5 style={nameStyle}>
                                    {name}
                                    </h5>
                                    <h6 style={roleStyle}>{role}</h6>
                                    <h6 style={contentStyle}>
                                    {description}
                                    </h6>
                                    <h5>Meet the Player</h5>
                                    <h6 style={contentStyle}><span className='additional-player-info'>Quote {name} lives by: </span>{quote}</h6>
                                    <h6 style={contentStyle}><span className='additional-player-info'>Hero: </span>{aspiration}</h6>
                                    <h6 style={contentStyle}><span className='additional-player-info'>Best Moment at the BLC: </span>{bestMoment}</h6>
                            <p class="proile-rating">BLC Temp Gauge: <span>{rankings}</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <h3>Stats</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>SOCIALS</p>
                            <a href={socialLinks[0]}>LinkedIn <MDBIcon fab icon="linkedin" className="blue-text" /></a><br/>
                            <a href={socialLinks[1]}>Instagram <MDBIcon fab icon="instagram" className="blue-text" /></a><br/>
                            <p>OUTSIDE OF THE BLC...</p>
                            <h7><span className='additional-player-info'>Day job:</span> {byDay}</h7><br/>
                            <h7><span className='additional-player-info'>Favourite Pub:</span> {pub}</h7><br/>
                            <h7><span className='additional-player-info'>Beverage choice:</span> {beer}</h7><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label className='additional-player-info'>Form</label>
                                            </div>
                                            <div class="col-md-6">
                                                {this.form(win, draw, loss, played)}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label className='additional-player-info'>Win Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p style={contentStyle}>{this.winRate()}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label className='additional-player-info'>Points Dropped</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p style={contentStyle}>{this.pointsDropped()}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label className='additional-player-info'>Average PD per game</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p style={contentStyle}>{this.averagePdPerGame()}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label className='additional-player-info'>Best finish in virtual cup</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p style={contentStyle}>{bestFinish}</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>          
        </div>
                </div>
                : null}
        </div>
    );
  }
}

const loveOPfGameStyle = {
    fontWeight: 'bold',
    color: 'black'
}

const nameStyle = {
    fontSize: '50px'
}

const contentStyle = {
    color: '#7B67C9'
}

const roleStyle = {
    color: '#7B67C9',
    fontWeight: 'bold',
    fontSize: '30px'
}

export default ViewPlayer;
