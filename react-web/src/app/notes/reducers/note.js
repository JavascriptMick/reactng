const note = (note = null, action) => {
  console.log(`note.reducer note:${JSON.stringify(note)} action:${JSON.stringify(action)}`);
  switch(action.type){
    case "ADD_NOTE":
      return Object.assign({}, action.payload, {dirty: true});
    case "UPDATE_NOTE_TEXT":
      if(note.id === action.payload.id){
        return Object.assign({}, note, {text: action.payload.text}, {dirty: true})
      } else {
        return note;
      }
    case "UPDATE_NOTE_POSITION":
      if(note.id === action.payload.id){
        return Object.assign({}, note, {left: action.payload.left, top: action.payload.top}, {dirty: true})
      } else {
        return note;
      }
    case "ADD_NOTE_FROM_SERVER":
      return Object.assign({}, action.payload, {dirty: false});
    case "UPDATE_NOTE_FROM_SERVER":
      if(note.id === action.payload.id){
        return Object.assign({}, note, action.payload, {dirty: false})
      } else {
        return note;
      }
    default:
      return note;
  }
}

export default note;