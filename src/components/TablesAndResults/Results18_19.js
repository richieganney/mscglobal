import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Results18_19 extends Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <h2>2018/2019</h2>
                    <tr style={style}>
                    <th style={dateStyle}>TUESDAY 8th OCTOBER 2019</th>
                    </tr>

                    <tr style={style}>
                    <th style={style}>Rovers <span style={spanStyle}>3 - 0</span> Esampdoria</th>
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

export default Results18_19;