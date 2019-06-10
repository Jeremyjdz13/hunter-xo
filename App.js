import React from 'react';
import HomePage from './home';
import EpisodePage from './episodes';
import CharacterPage from './charcter';
import ChartsPage from './charts';
import RulesPage from './rules';
import DiceRollerPage from './components/DiceRoller'
import 'firebase/auth';

import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';


function Home() {
  return <HomePage />
}

function Episodes(){
  return <EpisodePage />
}

function Character(){
  return <CharacterPage />
}

function Charts(){
  return <ChartsPage />
}

function Rules(){
  return <RulesPage />
}

function DiceRoller(){
  return <DiceRollerPage />
}

function NotFound(){
  return <h1>404</h1>
}

class App extends React.Component {
  render(){
  return (
    <div>
      <Router>
        <div className="appLinks">
          <div><Link to="/">Home</Link>  | 
          <Link to="/episodes">Episodes</Link>  |
          <Link to="/character">Character</Link>  | 
          <Link to="/diceRoller">Dice Roller</Link>  | 
          <Link to="/charts">Charts</Link>  | 
          <Link to="/rules">Rules</Link>  </div>
          <div>
          </div>
        </div>  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/character" component={Character} />
          <Route path="/diceRoller" component={DiceRoller} />
          <Route path="/charts" component={Charts} />
          <Route path="/rules" component={Rules} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
 }
}

export default App

