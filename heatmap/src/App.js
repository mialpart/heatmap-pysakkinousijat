import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import EsriMap from './components/EsriMap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          

          <EsriMap></EsriMap>
        </header>
      </div>
    );
  }
}

export default App;
