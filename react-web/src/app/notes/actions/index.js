import {default as UUID} from "node-uuid";

export const addNote = (text, colour, left, top) => {
  return {
    type: "ADD_NOTE",
    payload:{text, colour, left, top, id:UUID.v4()}
  };
};

export const updateNoteText = (text, id) => {
  return {
    type: "UPDATE_NOTE_TEXT",
    payload:{id, text} 
  };
};

export const updateNotePosition = (left, top, id) => {
  return {
    type: "UPDATE_NOTE_POSITION",
    payload:{ id, left, top}
  };
};

export const initNotes = () => {
    return {
      type: "INIT_NOTES"
    };
};

export const updateNoteFromServer = (note) => {
  console.log(`Action Creator updateNoteFromServer note:${JSON.stringify(note)}`);
  return {
    type: "UPDATE_NOTE_FROM_SERVER",
    payload: note 
  };
};

export const addNoteFromServer = (note) => {
  return {
    type: "ADD_NOTE_FROM_SERVER", 
    payload: note
  };
};

export const fetchFailed = (message) => {
  return {
    type: "FETCH_FAILED",
    payload: message
  };
};



