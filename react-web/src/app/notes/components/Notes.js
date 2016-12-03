import React, { Component } from 'react';

import './Notes.css';
import Note from './Note';
import AddButton from './AddButton';

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
        <AddButton add={this.props.onAddNote.bind(this)} colour="yellow"/>
        <AddButton add={this.props.onAddNote.bind(this)} colour="red"/>
        <AddButton add={this.props.onAddNote.bind(this)} colour="green"/>
        <AddButton add={this.props.onAddNote.bind(this)} colour="blue"/>

        {NoteComponents}
      </div>
      );
  }
}

export default Notes;
