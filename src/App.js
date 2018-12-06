import React, { Component } from 'react';
import './App.css';
import AddContact from './components/AddContact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddContact />
      </div>
    );
  }
}

export default App;
