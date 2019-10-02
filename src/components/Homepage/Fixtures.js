import React, { Component } from 'react';

class Fixtures extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <h4 style={style}>Fixtures</h4>
                    <p style={style}>Rovers <span style={spanStyle}>20:15</span> Esampdoria</p>
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