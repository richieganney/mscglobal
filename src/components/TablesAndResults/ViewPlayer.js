import React from 'react';
import axios from 'axios';
import '../../styles/player_profiles.css'
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
    // if(this.state.playerLoaded) {
    //     this.setState({ additional: this.state.additional.split() })
    // }
  }

  getPlayer(){
    const playerId = this.props.match.params.playerId
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet2!A${playerId}:J${playerId}?key=${process.env.REACT_APP_SHEETS_API_KEY}`
    axios.get(url)
    .then(res => {
        this.setState({ player: res.data.values, playerLoaded: true,
                        name: res.data.values[0][0],
                        description: res.data.values[0][1],
                        image: res.data.values[0][2],
                        role: res.data.values[0][3],
                        additional: res.data.values[0][4],
                        rankings: res.data.values[0][5],
                        socialLinks: res.data.values[0][6],
                        quote: res.data.values[0][7],
                        beer: res.data.values[0][8],
                        byDay: res.data.values[0][9]
        })
    })
    .catch(error => {
        console.log(error)
    })
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
          return `+ ${average.toFixed(1)}`
      } else {
          return `${average.toFixed(1)}`
      }
    }

  playerImage(){
    switch(this.state.name) {
        case "Greenberg Packers":
          return Packers
          break;
        case "Richies Rovers":
            return Rovers
          break;
        case "Fortuna Muzzeldorf":
            return Muzzeldorf
          break;
        case "AFC Bournemurf":
            return Murf
          break;
        case "Chadrington Stanley":
            return Chadrington
          break;
        case "Brumbies":
            return Brumbies
          break;
        case "The Jimboks":
            return Jimbok
          break;
        case "Shorn Hub":
            return Shorn
          break;
        case "Alfonso Mango":
            return Mangos
          break;
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
                            src={this.getPlayer()} alt=""/>
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
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Stats 2019/2020</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
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
                            <a href="">Quote: {quote}</a><br/>
                            <a href="">Beer: {beer}</a><br/>
                            <a href="">By day? {byDay}</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Games Played</label>
                                            </div>
                                            <div class="col-md-6">
                                            {win}, {draw}, {loss}
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
                                        <p>{this.pointsDropped()} / {played * 3}</p>
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

export default ViewPlayer;