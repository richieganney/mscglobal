import React, { Component } from 'react';
import TablesAndResults18_19 from './TablesAndResults18_19';
import TablesAndResults19_20 from './TablesAndResults19_20';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles.css'

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

    renderTableData() {
      this.state.table.shift()
      return this.state.table.map((player, index) => {
         return (
          <tr className='table-hover' style={this.style(player)} key={index}>
               <td>{player[0]}</td>
               <td>{player[1]}</td>
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







// componentDidMount() {
//   // this.getTable()
//   this.setState({
//     table: [{
//       postion: '1',
//       team: 'chad',
//       played: '3',
//       win: '3',
//       draw: '5',
//       lose: '3',
//       pf: '50',
//       pa: '75',
//       pd: '-25',
//       p: '8'
//     },{postion: '2',
//     team: 'rovers',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},{postion: '3',
//     team: 'muz',
//     played: '4',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},{postion: '4',
//     team: 'rovers',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},{postion: '5',
//     team: 'muz',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},{postion: '6',
//     team: 'rovers',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},
//     {postion: '7',
//     team: 'muz',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'},{postion: '8',
//     team: 'muz',
//     played: '3',
//     win: '3',
//     draw: '5',
//     lose: '3',
//     pf: '50',
//     pa: '75',
//     pd: '-25',
//     p: '8'}]
//   })
// }