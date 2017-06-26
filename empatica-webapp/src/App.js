import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './datetime.css';
import MapPage from "./components/MapPage";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Statistics from './components/Statistics';

class App extends Component {
  render() {
    return (
        <Router>
              <div className="Map">
                  <div className="topbar">
                        <ul className="nav navbar-nav topbar">
                            <button type="button" className="btn btn-secondary">
                            <Link to='/'>Map</Link>
                            </button>
                            <button type="button" className="btn btn-secondary">
                            <Link to='/statistics'>Statistic</Link>
                            </button>

                        </ul>
                    </div>
                    <Route exact path="/" component={MapPage}/>
                    <Route path="/statistics" component={Statistics}/>
              </div>
            </Router>
    );
  }
}

export default App;
