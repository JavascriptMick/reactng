import { Action } from '@ngrx/store';
import { UUID } from 'angular2-uuid';

import { Note } from '../notes.model';

export const ActionTypes= {
  ADD_NOTE: "ADD_NOTE",
  UPDATE_NOTE_TEXT: "UPDATE_NOTE_TEXT",
  UPDATE_NOTE_POSITION: "UPDATE_NOTE_POSITION",
  INIT_NOTES: "INIT_NOTES",
  UPDATE_NOTE_FROM_SERVER: "UPDATE_NOTE_FROM_SERVER",
  UPDATE_FAILED: "UPDATE_FAILED",
  ADD_NOTE_FROM_SERVER: "ADD_NOTE_FROM_SERVER",
  FETCH_FAILED: "FETCH_FAILED"
}

export const addNote = (text: string, colour: string, left: number, top: number): Action => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload:{text, colour, left, top, id:UUID.UUID()}
  };
};

export const updateNoteText = (text: string, id: string): Action => {
  return {
    type: ActionTypes.UPDATE_NOTE_TEXT,
    payload:{id, text} 
  };
};

export const updateNotePosition = (left: number, top: number, id: string): Action => {
  return {
    type: ActionTypes.UPDATE_NOTE_POSITION,
    payload:{ id, left, top}
  };
};

export const initNotes = (): Action => {
    return {
      type: ActionTypes.INIT_NOTES
    };
};

export const updateNoteFromServer = (note: Note): Action => {
  return {
    type: ActionTypes.UPDATE_NOTE_FROM_SERVER,
    payload: note 
  };
};

export const updateFailed = (message: string): Action => {
  return {
    type: ActionTypes.UPDATE_FAILED,
    payload: message 
  };
};

export const addNoteFromServer = (note: Note): Action => {
  return {
    type: ActionTypes.ADD_NOTE_FROM_SERVER, 
    payload: note
  };
};

export const fetchFailed = (message: string): Action => {
  return {
    type: ActionTypes.FETCH_FAILED,
    payload: message
  };
};



