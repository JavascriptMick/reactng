import { Action } from '@ngrx/store';

import { Note } from '../notes.model';
import { note } from './note.reducer';
import { ActionTypes } from '../actions/actions';

export const notes = (notes: Array<Note> = [], action: Action) => {
  // console.log(`notes.reducer action:${JSON.stringify(action)}`);
  switch(action.type){
    case ActionTypes.ADD_NOTE:
    case ActionTypes.ADD_NOTE_FROM_SERVER:
      return [...notes, note(null, action)]
    case ActionTypes.UPDATE_NOTE_TEXT:
    case ActionTypes.UPDATE_NOTE_POSITION:
    case ActionTypes.UPDATE_NOTE_FROM_SERVER:
      return notes.map(_note => note(_note, action));
    default:
      return notes;
  }
}