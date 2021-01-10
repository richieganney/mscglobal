import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AllTables from './AllTables';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }

  render() {
    return <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        < Tab eventKey="squash" title="Squash">
        <h1 id='title'> South West Division 3 Tables </h1><br></br>
        <h1 id='title'>2019/2020</h1>
        <AllTables
        firstArg={'A1'}
        secondArg={'K10'}
        /><br></br>
        <h1 id='title'>2018/2019</h1>
        <AllTables
        firstArg={'A20'}
        secondArg={'K26'}
        />
        </Tab>
        <Tab eventKey="chess" title="Chess">
        <h1 id='title'> 2021 MSC Chess Tournament </h1><br></br>
        <AllTables
        firstArg={'A30'}
        secondArg={'K42'}
        />
        </Tab>
        </Tabs>
    </div>;
  }
}

export default Table;
