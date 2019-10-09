import React, { Component } from 'react';
import TablesAndResults18_19 from './TablesAndResults18_19';
import TablesAndResults19_20 from './TablesAndResults19_20';
import Results18_19 from './Results18_19'
import Results19_20 from './Results19_20';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class AllTables extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="tables" title="Tables">
                <h1>South West Division 3 Tables</h1><br></br>
                <TablesAndResults19_20/>
                <TablesAndResults18_19/>
                </Tab>
                
                <Tab eventKey="results" title="Results">
                <Results19_20 />
                <Results18_19 />
                </Tab>
                </Tabs>
            </div>
        );
    }
}

export default AllTables;