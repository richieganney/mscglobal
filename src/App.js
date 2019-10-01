import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import TablesAndResults from './components/TablesAndResults'
import './styles.css'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/about" component={About} />
        <Route path="/tables" component={TablesAndResults} />
      </header>
    </div>
    </Router>
  );
}

export default App;
