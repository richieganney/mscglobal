import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const compareFunction = (a, b) => {
    if (a.points === b.points) {
        if (a.points_difference === b.points_difference) {
            return a.points_for < b.points_for ? 1 : -1
        }
        else {
            return a.points_difference < b.points_difference ? 1 : -1
        }
    }
    else {
        return a.points < b.points ? 1 : -1
    } 
}

class API_test extends Component {
    constructor(props) {
    super(props);
    this.state =
    {
    table: []
    };
    this.onClick = this.onClick.bind(this);
}

onClick(e) {
    e.preventDefault();
    let url = 'http://localhost:3000/league-table/'
    axios
    .get(url)
    .then(response => {
        this.setState({ table: response.data.sort(compareFunction) })
    })
    .catch(error => {
        console.log(error.response);
    });
}
// you will need to pass this down as props so that there is not an infinate loop
render() {
    
    return (
        <div>
            <center><button onClick={e => {this.onClick(e)}}>View Table</button></center>
            <h2>2019/2020</h2>
            <div>
                
                {this.state.table.map(player => (
                        <Table>
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
                             <tbody>
                             <tr>
                                 <td></td>
                                 <th>{player.team_name}</th>
                                 <td>{player.played}</td>
                                 <td>{player.win}</td>
                                 <td>{player.draw}</td>
                                 <td>{player.loss}</td>
                                 <td>{player.points_for}</td>
                                 <td>{player.points_against}</td>
                                 <td>{player.points_difference}</td>
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
