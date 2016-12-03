import { Action } from '@ngrx/store';

import { ActionTypes } from '../actions/actions';
import { Note } from '../notes.model';

export const note = (note: Note = null, action: Action) => {
  switch(action.type){
    case ActionTypes.ADD_NOTE:
      return Object.assign({}, action.payload, {dirty: true});
    case ActionTypes.UPDATE_NOTE_TEXT:
      if(note.id === action.payload.id){
        return Object.assign({}, note, {text: action.payload.text}, {dirty: true})
      } else {
        return note;
      }
    case ActionTypes.UPDATE_NOTE_POSITION:
      if(note.id === action.payload.id){
        return Object.assign({}, note, {left: action.payload.left, top: action.payload.top}, {dirty: true})
      } else {
        return note;
      }
    case ActionTypes.ADD_NOTE_FROM_SERVER:
      return Object.assign({}, action.payload, {dirty: false});
    case ActionTypes.UPDATE_NOTE_FROM_SERVER:
      if(note.id === action.payload.id){
        return Object.assign({}, note, action.payload, {dirty: false})
      } else {
        return note;
      }
    default:
      return note;
  }
}