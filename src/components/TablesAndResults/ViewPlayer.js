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

import { PieChart } from 'react-minimal-pie-chart';

class ViewPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
        player: [],
        playerLoaded: false,
        name: '',
        description: '',
        image: '',
        role: '',
        additional: '',
        rankings: '',
        quote: '',
        beer: '',
        byDay: ''
    };
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer(){
    const playerId = this.props.match.params.playerId
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet2!A${playerId}:J${playerId}?key=${process.env.REACT_APP_SHEETS_API_KEY}`
    axios.get(url)
    .then(res => {
        this.setState({ player: res.data.values,
                        name: res.data.values[0][0],
                        description: res.data.values[0][1],
                        image: res.data.values[0][2],
                        role: res.data.values[0][3],
                        additional: res.data.values[0][4],
                        rankings: res.data.values[0][5],
                        socialLinks: res.data.values[0][6],
                        quote: res.data.values[0][7],
                        beer: res.data.values[0][8],
                        byDay: res.data.values[0][9],
                        playerLoaded: true
        })
    })
    .catch(error => {
        console.log(error)
    })
    }

    splitData(data){
      return data.split()
    }

    winRate(){
        const { played, win } = this.props.location.state
        const finalNum = (Number(win)/Number(played)) * 100
        return Math.round(finalNum);
    }

    pointsDropped(){
        const { played, points } = this.props.location.state
        const totalPoints = played * 3
        const finalNum = totalPoints - points
        return finalNum
    }

    averagePdPerGame(){
      const { played, pointsDifference } = this.props.location.state
      const average = pointsDifference / played
      if(average > 1){
          return `+ ${Math.round(average)}`
      } else {
          return `${Math.round(average)}`
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
    }
    else {
        return Mangos
    }
  }

  render() {
    const { name, description, image, role, additional, rankings, quote, beer, byDay } = this.state
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
                                    <h5>
                                    {name}
                                    </h5>
                                    <h6>{role}</h6>
                                    <h6>
                                    {description}
                                    </h6>
                            <p class="proile-rating">RANKINGS : <span>{rankings}</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <h3>Stats 2019/2020</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>LINKS</p>
                            <a href="">LinkedIn</a><br/>
                            <a href="">Instagram</a><br/>
                            <a href="">Facebook</a>
                            <p>FROM THE PLAYERS THEMSELVES</p>
                            <h7><span className='additional-player-info'>Quote:</span> {quote}</h7><br/>
                            <h7><span className='additional-player-info'>Beer:</span> {beer}</h7><br/>
                            <h7><span className='additional-player-info'>By day?</span> {byDay}</h7><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>All Games</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p><span style={green}>{win}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={amber}>{draw}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={red}>{loss}</span></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Win Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p>{this.winRate()}%</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Points Dropped</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p>{this.pointsDropped()}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Average PD per game</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p>{this.averagePdPerGame()}</p>
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

const green = {
    color: 'green'
}

const amber = {
    color: 'orange'
}

const red = {
    color: 'red'
}
export default ViewPlayer;