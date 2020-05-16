import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/styles.css'

class AllTables extends Component {
    
    constructor() {
        super();
        this.state = {
          table: [],
          tableLoaded: false
        };
      }
    
componentDidMount() {
  this.getTable()
  // this.setState({
  //   table: [{
  //     postion: '1',
  //     team: 'chadrington',
  //     played: '3',
  //     win: '3',
  //     draw: '5',
  //     lose: '3',
  //     pf: '50',
  //     pa: '75',
  //     pd: '-25',
  //     p: '8'
  //   },{postion: '2',
  //   team: 'richies rovers',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},{postion: '3',
  //   team: 'fortuna muzzeldorf',
  //   played: '4',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},{postion: '4',
  //   team: 'brumbies squash',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},{postion: '5',
  //   team: 'greenberg packers',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},{postion: '6',
  //   team: 'esampdoria',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},
  //   {postion: '7',
  //   team: 'alfonso mango',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'},{postion: '8',
  //   team: 'jimboks squash',
  //   played: '3',
  //   win: '3',
  //   draw: '5',
  //   lose: '3',
  //   pf: '50',
  //   pa: '75',
  //   pd: '-25',
  //   p: '8'}]
  // })
}

      getTable() {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet1!${this.props.firstArg}:${this.props.secondArg}?key=${process.env.REACT_APP_SHEETS_API_KEY}`
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

    renderTableData() {
      this.state.table.shift()
      return this.state.table.map((player, index) => {
        // const { postion, team, played, win, draw, lose, pf, pa, pd, p } = player
         return (
              <tr className='table-hover' style={this.style(player)} key={index}>
               <td>{player[0]}</td>
               <Link className='link-style' to={{
              pathname: `/player/${player[10]}/${player[1]}`,
              state: {
                  playerId: player[10],
                  position: player[0],
                  played: player[2],
                  win: player[3],
                  draw: player[4],
                  loss: player[5],
                  pointsDifference: player[8],
                  points: player[9]
              }
               }}><td>{player[1]}</td></Link>
               <td>{player[2]}</td>
               <td>{player[3]}</td>
               <td>{player[4]}</td>
               <td>{player[5]}</td>
               <td>{player[6]}</td>
               <td>{player[7]}</td>
               <td>{player[8]}</td>
               <td>{player[9]}</td>
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
