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
                        <th style={spanStyle}>TUESDAY 8th OCTOBER 2019</th>
                        </tr>

                        <tr style={style}>
                        <th style={style}>Rovers <span style={spanStyle}>20:15</span> Esampdoria</th>
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
    backgroundColor: 'grey'
}

export default Fixtures;