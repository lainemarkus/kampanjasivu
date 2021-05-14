import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import Cardpage from './components/cardpage';
import Kysymyslaatikot from './components/useinkysytyt'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Frontpage} />
        <Route path='/test' component={Cardpage} />
        <Route path='/faq' component={Kysymyslaatikot} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
