import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Season18_19 from './components/SeasonHighlights/Season18_19'
import Homepage from './components/Homepage/Homepage';
import './styles.css'
import AllTables from './components/TablesAndResults/AllTables';
import AllTeams from './components/AllTeams';
import SocialInfo from './components/SocialInfo';
import MatchReports from './components/MatchReports';
import ViewBlog from './components/Homepage/ViewBlog';
import ViewPlayer from './components/TablesAndResults/ViewPlayer';

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
        <Route path="/social-info" component={SocialInfo} />
        <Route path="/match-reports" component={MatchReports} />
        <Route path='/blogs/:postId/:postTitle' component={ViewBlog}/>
        <Route path='/player/:playerId/:playerName' component={ViewPlayer}/>
      </header>
    </div>
    </Router>
  );
}

export default App;
