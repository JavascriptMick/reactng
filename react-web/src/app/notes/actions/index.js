import {default as UUID} from "node-uuid";

export const addNote = (text, colour, left, top) => {
  return {
    type: "ADD_NOTE", 
    text, 
    colour, 
    left, 
    top, 
    id:UUID.v4()
  };
};

export const updateNoteText = (text, id) => {
  return {
    type: "UPDATE_NOTE_TEXT", 
    id, 
    text};
};

export const updateNotePosition = (left, top, id) => {
  return {
    type: "UPDATE_NOTE_POSITION", 
    id, 
    left, 
    top
  };
};

export const initNotes = () => {
    return {
      type: "INIT_NOTES"
    };
};
