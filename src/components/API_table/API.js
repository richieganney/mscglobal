import React, { Component } from 'react';
import API_test from './API_test';
import axios from 'axios';

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

class API extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        table: []
        };
        this.getTable = this.getTable.bind(this);
    }

    getTable(e) {
        e.preventDefault();
        const url = process.env.REACT_APP_LEAGUE_TABLE_API;
        console.log("URL HERE")
        console.log(url)
        axios
        .get(url)
        .then(response => {
            this.setState({ table: response.data.sort(compareFunction) })
        })
        .catch(error => {
            console.log("error")
            console.log(error.response);
        });
    }

    render() {
        return ( < div >
        <center><button onClick={e => {this.getTable(e)}}>View Table</button></center>
            <API_test
            table={this.state.table}
            ></API_test>
            </div>
        );
    }
}

export default API;