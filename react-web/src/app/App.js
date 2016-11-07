import React, { Component } from 'react';
import './App.css';
import Notes from './notes/Notes';

class App extends Component {
  title = 'React Web - ReactNg';
  render() {
    return (
      <div>
        <h1>
          {this.title}
        </h1>
        <Notes/>
      </div>
    );
  }
}

export default App;
