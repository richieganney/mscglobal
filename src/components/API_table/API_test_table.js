import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class API_test_table extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { team_name, played, win, draw, loss, points_for, points_against, points_difference, points } = this.props.player;
        return ( < div >
                <h2>2018/2019</h2>
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
                    <tbody>
                        <tr style={style}>
                        <td></td>
                        <th>{team_name}</th>
                        <td>{played}</td>
                        <td>{win}</td>
                        <td>{draw}</td>
                        <td>{loss}</td>
                        <td>{points_for}</td>
                        <td>{points_against}</td>
                        <td>{points_difference}</td>
                        <td>{points}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const style = {
    backgroundColor: '#7B67C9'
}

export default API_test_table;
