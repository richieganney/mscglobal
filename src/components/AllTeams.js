import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import Figure from 'react-bootstrap/Figure'
import Brumbies from '../photos_and_videos/all_teams/brumbies.jpeg';
import FiveClive from '../photos_and_videos/all_teams/fiveclive.jpeg';
import Mangos from '../photos_and_videos/all_teams/mangos.jpeg';
import NedJinks from '../photos_and_videos/all_teams/nedjinks.jpeg';
import Packers from '../photos_and_videos/all_teams/packers.jpeg';
import Rovers from '../photos_and_videos/all_teams/rovers.jpeg';
import SeaOtters from '../photos_and_videos/all_teams/seaotters.jpeg';
import Esampdoria from '../photos_and_videos/all_teams/esampdoria.jpeg';
import Jimbok from '../photos_and_videos/all_teams/jimbok.jpeg';
import Murf from '../photos_and_videos/all_teams/bournmurf.jpeg';
import Chadrington from '../photos_and_videos/all_teams/chadrington.jpeg';
import Muzzeldorf from '../photos_and_videos/all_teams/muzzeldorf.jpeg';
import Shorn from '../photos_and_videos/all_teams/shorn_hub.jpeg';
import Cowracens from '../photos_and_videos/all_teams/cowracens.jpeg';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllTeams extends Component {

    constructor() {
        super();
        this.state = {
            players: [],
            playersLoaded: false
        };
      }

    componentDidMount(){
        this.getPlayer()
    }

    getPlayer() {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet1!A2:K15?key=${process.env.REACT_APP_SHEETS_API_KEY}`
        axios.get(url)
        .then(res => {
            this.setState({ players: res.data.values, playersLoaded: true });
        })
        .catch(error => {
            console.log(error)
        })
      }

    renderPlayerData() {
        return this.state.players.map((player, index) => {
           return (  
                <MDBCol lg="3" md="6" className="all-teams-hover">
                <Link className='link-style' to={{
              pathname: `/player/${player[10]}/${player[1]}`,
              state: {
                  playerId: player[10],
                  played: player[2],
                  win: player[3],
                  draw: player[4],
                  loss: player[5],
                  pointsDifference: player[8],
                  points: player[9]
              }
               }}><Figure className="container">
                            <Figure.Image
                                className="all-teams-img"
                                width={171}
                                height={180}
                                alt="171x180"
                                src={this.playerImage(player[1])}
                                // className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure></Link>
                        <h5 className="font-weight-bold mt-4 mb-3">{player[1]}</h5>
                </MDBCol>
           )
        })
     }
    
        playerImage(name){
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
            } else if(name == "BBC Radio 5 Clive"){
                return FiveClive
            } else if(name == "Club Ned Ninks"){
                return NedJinks
            } else if(name == "Cowracens"){
                return Cowracens
            }
            else {
                return Mangos
            }
          }

          render() {
            return (
               <div>
                   <MDBCard className="my-5 px-5 pb-5 text-center">
                   <MDBRow>
                   {this.renderPlayerData()}
                   </MDBRow>
                   </MDBCard>
               </div>
            )
          }
}

export default AllTeams;
