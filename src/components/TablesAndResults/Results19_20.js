import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Results19_20 extends Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <h2>2019/2020</h2>

                    <tr style={style}>
                    <th style={dateStyle}>MONDAY 21st OCTOBER</th>
                    </tr>

                    <tr style={style}>
                    <th style={style}>AFC Bourenburf <span style={spanStyle}>3 - 0</span>Alfonso Mango</th>
                    </tr>

                    <tr style={style}>
                    <th style={dateStyle}>MONDAY 14th OCTOBER</th>
                    </tr>

                    <tr style={style}>
                    <th style={style}>Esampdoria <span style={spanStyle}>3 - 0</span> The Sea Otters</th>
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