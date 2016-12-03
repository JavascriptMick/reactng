import { Action } from '@ngrx/store';

import { note } from './note.reducer';
import { ActionTypes } from '../actions/actions';
import { Note } from '../notes.model';

export const notes = (notes: Array<Note> = [], action: Action) => {
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