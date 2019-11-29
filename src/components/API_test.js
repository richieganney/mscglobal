import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class API_test extends Component {
    constructor(props) {
    super(props);
    this.state =
    {
    table: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
    this.onClick = this.onClick.bind(this);
}

onClick(e) {
    e.preventDefault();
    let url = 'http://localhost:3000/league-table/'
    axios
    .get(url)
    .then(response => {
        this.setState({ table: response.data })
        console.log("RESPONSE")
        console.log(response.data)
        console.log("STATE")
        console.log(this.state.table)
    })
    .catch(error => {
        console.log("THIS IS THE ERROR")
        console.log(error.response);
    });
}
render() {
    
    return (
        <div>
            <center><button onClick={e => {this.onClick(e)}}>View Table</button></center>
            <h2>2019/2020</h2>
            <div>
                <Table responsive>
            <thead>
                <tr>
                <th></th>
                <th>Team</th>
                <th>Played</th>
                <th>Win</th>
                <th>Draw</th>
                <th>Loss</th>
                <th>Points For</th>
                <th>Points Against</th>
                <th>Points Difference</th>
                <th>Points</th>
                </tr>
            </thead>
            </Table>
                {this.state.table.map(player => (
                             <Table responsive>
                             <tbody>
                             <tr style={style}>
                                 <td>1</td>
                                 <th>{player.team_name}</th>
                                 <td>{player.played}</td>
                                 <td>{player.win}</td>
                                 <td>{player.draw}</td>
                                 <td>{player.loss}</td>
                                 <td>{player.played}</td>
                                 <td>{player.points_for}</td>
                                 <td>{player.points_against}</td>
                                 <td>{player.points}</td>
                             </tr>
                             </tbody>
                         </Table>
                ))}
            </div>
        </div>
    );
}
}
        

const style = {
    backgroundColor: '#7B67C9'
}

export default API_test;
