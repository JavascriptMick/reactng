import {default as UUID} from "node-uuid";




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

export const addNote = (text, colour, left, top) => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload:{text, colour, left, top, id:UUID.v4()}
  };
};

export const updateNoteText = (text, id) => {
  return {
    type: ActionTypes.UPDATE_NOTE_TEXT,
    payload:{id, text} 
  };
};

export const updateNotePosition = (left, top, id) => {
  return {
    type: ActionTypes.UPDATE_NOTE_POSITION,
    payload:{ id, left, top}
  };
};

export const initNotes = () => {
    return {
      type: ActionTypes.INIT_NOTES
    };
};

export const updateNoteFromServer = (note) => {
  return {
    type: ActionTypes.UPDATE_NOTE_FROM_SERVER,
    payload: note 
  };
};

export const updateFailed = (message) => {
  return {
    type: ActionTypes.UPDATE_FAILED,
    payload: message
  };
};

export const addNoteFromServer = (note) => {
  return {
    type: ActionTypes.ADD_NOTE_FROM_SERVER, 
    payload: note
  };
};

export const fetchFailed = (message) => {
  return {
    type: ActionTypes.FETCH_FAILED,
    payload: message
  };
};



