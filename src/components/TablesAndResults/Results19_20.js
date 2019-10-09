import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Results19_20 extends Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <h2>2019/2020</h2>
                    <tr style={style}>
                    <th style={dateStyle}>TBC</th>
                    </tr>

                    <tr style={style}>
                    <th style={style}>TBC <span style={spanStyle}>0 - 0</span> TBC</th>
                    </tr>

                    <tr style={style}>
                    <th ></th>
                    </tr>
                </Table>
            </div>
        );
    }
}

const style = {
    textAlign: 'center'
}

const spanStyle = {
    backgroundColor: '#CBD2D3',
    borderRadius: '25px',
    padding: '5px'
}

const dateStyle = {
    backgroundColor: '#CBD2D3'
}

export default Results19_20;