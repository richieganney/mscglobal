import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Season18_19 from './components/SeasonHighlights/Season18_19'
import Homepage from './components/Homepage/Homepage';
import './styles/styles.css'
import Table from './components/TablesAndResults/Table';
import AllTeams from './components/AllTeams';
import SocialInfo from './components/SocialInfo';
import MatchReports from './components/MatchReports';
import ViewBlog from './components/Homepage/ViewBlog';
import ViewPlayer from './components/TablesAndResults/ViewPlayer';
import { Security, LoginCallback } from '@okta/okta-react';

function App() {

  const CALLBACK_PATH = '/implicit/callback';
  const OKTA_DOMAIN = process.env.REACT_APP_ISSUER;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
  const HOST = window.location.host;
  const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
  const SCOPES = 'openid profile email';

  const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scope: SCOPES.split(/\s+/),
  };

  return (
    <Router>
      <Security {...config}>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/tables" component={Table} />
        <Route path="/season/18-19" component={Season18_19} />
        <Route path="/all-teams" component={AllTeams} />
        <Route path="/social-info" component={SocialInfo} />
        <Route path="/match-reports" component={MatchReports} />
        <Route path='/blogs/:postId/:postTitle' component={ViewBlog}/>
        <Route path='/player/:playerId/:playerName' component={ViewPlayer}/>
        <Route path={CALLBACK_PATH} component={LoginCallback}/>
      </header>
    </div>
    </Security>
    </Router>
  );
}

export default App;
