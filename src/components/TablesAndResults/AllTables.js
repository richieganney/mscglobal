import React, { Component } from 'react';
import TablesAndResults18_19 from './TablesAndResults18_19';
import TablesAndResults19_20 from './TablesAndResults19_20';

class AllTables extends Component {
    render() {
        return (
            <div>
                <h1>South West Division 3 Tables</h1><br></br>
                <TablesAndResults19_20/>
                <TablesAndResults18_19/>
            </div>
        );
    }
}

export default AllTables;