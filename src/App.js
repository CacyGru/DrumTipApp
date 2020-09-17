import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './components/Home';
import Kategorie1 from './components/Kategorie1';
import Kategorie2 from './components/Kategorie2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/kategorie1" component={Kategorie1} />
          <Route path="/kategorie2" component={Kategorie2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
