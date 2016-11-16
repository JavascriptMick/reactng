import note from './note';

const notes = (notes = [
    {
      "id": 1,
      "text": "ReactNg",
      "colour": "red",
      "left": 200,
      "top": 100
    },
    {
      "id": 2,
      "text": "Comparing React and Angular in a non trivial app!",
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
], action) => {
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