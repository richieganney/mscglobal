import React from 'react';
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
    </div>;
  }
}

export default Table;
