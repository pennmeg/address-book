import React, { Component } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Address Book</h1>
        <AddContact />
        <div className="address-book">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
