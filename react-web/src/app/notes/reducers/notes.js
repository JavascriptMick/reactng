import note from './note';
import { ActionTypes } from '../actions/Actions'

const notes = (notes = [], action) => {
  switch(action.type){
    case ActionTypes.ADD_NOTE:
    case ActionTypes.ADD_NOTE_FROM_SERVER:
      return [...notes, note(null, action)]
    case ActionTypes.UPDATE_NOTE_TEXT:
    case ActionTypes.UPDATE_NOTE_POSITION:
    case ActionTypes.UPDATE_NOTE_FROM_SERVER:
      return notes.map(_note => {
        return note(_note, action); 
      });
    default:
      return notes;
  }
}

export default notes;