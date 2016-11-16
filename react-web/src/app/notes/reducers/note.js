const note = (note = null, action) => {
  //console.log(`note.reducer note:${JSON.stringify(note)} action:${JSON.stringify(action)}`);
  switch(action.type){
    case "ADD_NOTE":
      return Object.assign({}, action, {dirty: true});
    case "UPDATE_NOTE_TEXT":
      if(note.id === action.id){
        return Object.assign({}, note, {text: action.text}, {dirty: true})
      } else {
        return note;
      }
    case "UPDATE_NOTE_POSITION":
      if(note.id === action.id){
        return Object.assign({}, note, {left: action.left, top: action.top}, {dirty: true})
      } else {
        return note;
      }
    case "ADD_NOTE_FROM_SERVER":
      return Object.assign({}, action, {dirty: false});
    case "UPDATE_NOTE_FROM_SERVER":
      if(note.id === action.note.id){
        return Object.assign({}, note, action, {dirty: false})
      } else {
        return note;
      }
    default:
      return note;
  }
}

export default note;