import React, { Component } from 'react';
import Nav from './layout/Nav'
import Leftcont from './layout/Leftcont'
import Centercont from './layout/Centercont'
import Rightcont from './layout/Rightcont'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <div className="w3-container w3-content contmargin-top">
                  <div className="w3-row">
                  <Leftcont/>
                    <Centercont/>
                    <Rightcont/>
                 </div>
          </div>
      </div>
    );
  }
}

export default App;
