import React, { Component } from 'react';
import API_test_table from './API_test_table';
// import { Table } from 'react-bootstrap';

class API_test extends Component {
    constructor(props) {
    super(props);
    }

render() {
    return this.props.table.map((player) => (
      <API_test_table
      key={player.id}
      player={player}
      />
    ));
  }
}

export default API_test;
