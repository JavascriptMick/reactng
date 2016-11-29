import note from './note';

const notes = (notes = [], action) => {
  // console.log(`notes.reducer action:${JSON.stringify(action)} notes:${JSON.stringify(notes)}`);
  switch(action.type){
    case "ADD_NOTE":
    case "ADD_NOTE_FROM_SERVER":
      return [...notes, note(null, action)]
    case "UPDATE_NOTE_TEXT":
    case "UPDATE_NOTE_POSITION":
    case "UPDATE_NOTE_FROM_SERVER":
      return notes.map(_note => {
        return note(_note, action); 
      });
    default:
      return notes;
  }
}

export default notes;