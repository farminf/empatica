import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class TitleBar extends Component {
	render() {
		return (
            <Router>
			<div className="topbar">

                <ul className="nav navbar-nav">
                <button type="button" className="btn btn-secondary">
                  <Link to='/'>Map</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                  <Link to='/statistics'>Statistic</Link>
                </button>

              </ul>
			</div>
            </Router>
		);
	}
}
