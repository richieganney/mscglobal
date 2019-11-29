import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Season18_19 from './components/SeasonHighlights/Season18_19'
import Homepage from './components/Homepage/Homepage';
import './styles.css'
import AllTables from './components/TablesAndResults/AllTables';
import AllTeams from './components/AllTeams';
import API_test from './components/API_test';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/tables" component={AllTables} />
        <Route path="/season/18-19" component={Season18_19} />
        <Route path="/all-teams" component={AllTeams} />
        <Route path="/api-test-table" component={API_test} />
      </header>
    </div>
    </Router>
  );
}

export default App;
