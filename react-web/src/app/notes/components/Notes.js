import React, { Component } from 'react';
import './Notes.css';
import Note from './Note';

class Notes extends Component {  
  componentDidMount(){
    this.props.onInit();
  }
  
  render() {
    const NoteComponents = this.props.notes.map((note) => {
      return (
        <Note 
          changeNoteText={this.props.onChangeNoteText.bind(this, note.id)} 
          changeNotePosition={this.props.onChangeNotePosition.bind(this, note.id)}
          text={note.text} 
          colour={note.colour}
          left={note.left}
          top={note.top}
          disabled={note.dirty}
          key={note.id.toString()}/>
      );
    })

    return(
      <div>
      {/*
        <AddButton onAdd={this.props.handleOnAdd.bind(this)} colour="yellow"/>
        <AddButton onAdd={this.props.handleOnAdd.bind(this)} colour="red"/>
        <AddButton onAdd={this.props.handleOnAdd.bind(this)} colour="green"/>
        <AddButton onAdd={this.props.handleOnAdd.bind(this)} colour="blue"/>
      */}
        {NoteComponents}
      </div>
      );
  }
}

export default Notes;
