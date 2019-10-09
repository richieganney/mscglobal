import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Fixtures extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
                    <h4 style={style}>Fixtures</h4><br></br>
                    <Table responsive>
                        <tr style={style}>
                        <th style={dateStyle}>TBC</th>
                        </tr>

                        <tr style={style}>
                        <th style={style}>TBC <span style={spanStyle}>20:15</span> TBC</th>
                        </tr>

                        <tr style={style}>
                        <th ></th>
                        </tr>
                    </Table>
                </div>
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

export default Fixtures;