import React, { Component } from 'react';
import './App.css';
import NotesContainer from './notes/containers/NotesContainer';

class App extends Component {
  title = 'React Web - ReactNg';
  render() {
    return (
      <div>
        <h1>
          {this.title}
        </h1>
        <NotesContainer/>
      </div>
    );
  }
}

export default App;
