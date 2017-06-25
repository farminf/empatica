import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapPage from "./components/MapPage";
import TopBar from "./components/TopBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
				<MapPage />
			</div>
    );
  }
}

export default App;
