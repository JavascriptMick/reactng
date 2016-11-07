import React, { Component } from 'react';
import './Notes.css';
import Note from './Note';


class Notes extends Component {
  notes = [
    {
      "id": 1,
      "text": "ReactNg",
      "colour": "red",
      "left": 200,
      "top": 100
    },
    {
      "id": 2,
      "text": "Comparing React and Angular in a non trivial app.",
      "colour": "blue",
      "left": 300,
      "top": 200
    },
    {
      "id": 3,
      "text": "Companion Video available soon.",
      "colour": "yellow",
      "left": 400,
      "top": 300
    }
  ];
  
  handleOnAdd(colour){
    console.log('TODO - Dispatch a notes add action with colour ' + colour);
  }

  onChangeNoteText(newText){
    console.log('TODO - Dispatch a notes text update action with text ' + newText);
  }

  onChangeNotePosition(newPosition){
    console.log('TODO - Dispatch a notes position update action with position ' + newPosition);
  }

  render() {
    const NoteComponents = this.notes.map((note) => {
      return (
        <Note 
          changeNoteText={this.onChangeNoteText.bind(this)} 
          changeNotePosition={this.onChangeNotePosition.bind(this)}
          text={note.text} 
          colour={note.colour}
          left={note.left}
          top={note.top}
          key={note.id.toString()}/>
      );
    })

    return(
      <div>
      {/*
        <AddButton onAdd={this.handleOnAdd.bind(this)} colour="yellow"/>
        <AddButton onAdd={this.handleOnAdd.bind(this)} colour="red"/>
        <AddButton onAdd={this.handleOnAdd.bind(this)} colour="green"/>
        <AddButton onAdd={this.handleOnAdd.bind(this)} colour="blue"/>
      */}
        {NoteComponents}
      </div>
      );
  }
}

export default Notes;
