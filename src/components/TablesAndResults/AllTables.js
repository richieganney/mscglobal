import React, { Component } from 'react';
import TablesAndResults18_19 from './TablesAndResults18_19';
import TablesAndResults19_20 from './TablesAndResults19_20';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles.css'
import Popup from "reactjs-popup";

class AllTables extends Component {
    
    constructor() {
        super();
        this.state = {
          table: [],
          tableLoaded: false
        };
      }
    
componentDidMount() {
  // this.getTable()
  this.setState({
    table: [{
      postion: '1',
      team: 'chadrington',
      played: '3',
      win: '3',
      draw: '5',
      lose: '3',
      pf: '50',
      pa: '75',
      pd: '-25',
      p: '8'
    },{postion: '2',
    team: 'richies rovers',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},{postion: '3',
    team: 'fortuna muzzeldorf',
    played: '4',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},{postion: '4',
    team: 'brumbies squash',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},{postion: '5',
    team: 'greenberg packers',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},{postion: '6',
    team: 'esampdoria',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},
    {postion: '7',
    team: 'alfonso mango',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'},{postion: '8',
    team: 'jimboks squash',
    played: '3',
    win: '3',
    draw: '5',
    lose: '3',
    pf: '50',
    pa: '75',
    pd: '-25',
    p: '8'}]
  })
}

      getTable() {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet1!A1:K10?key=${process.env.REACT_APP_SHEETS_API_KEY}`
        axios.get(url)
        .then(res => {
            this.setState({ table: res.data.values, tableLoaded: true });
        })
        .catch(error => {
            console.log(error)
        })
      }

    style(player){
        if(player[0] <= 4){
          return {
            backgroundColor: '#7B67C9'
        }
      }
    }

    // onClick(team){
    //   console.log(team)
    // }

    renderTableData() {
      this.state.table.shift()
      return this.state.table.map((player, index) => {
        const { postion, team, played, win, draw, lose, pf, pa, pd, p } = player
         return (
              <tr className='table-hover' style={this.style(player)} key={index}>
               <td>{postion}</td>
               <Link className='link-style' to={{
              pathname: `/player/${player[10]}/${player[1]}`,
              state: {
                  playerId: player[10]
              }
               }}><td>{team}</td></Link>
               <td>{played}</td>
               <td>{win}</td>
               <td>{draw}</td>
               <td>{lose}</td>
               <td>{pf}</td>
               <td>{pa}</td>
               <td>{pd}</td>
               <td>{p}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
    const header = ["position", "team", "played", "win", "draw", "loss", "points for", "points against", "points difference", "points"]
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
  return (
     <div>
       <h1 id='title'> South West Division 3 Tables </h1><br></br>
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
  )
}
}

export default AllTables;
