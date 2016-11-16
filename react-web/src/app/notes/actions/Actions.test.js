import {addNote, updateNoteText, updateNotePosition, initNotes} from "./index"

const NOTE_TEST_TEXT = "This is note text.";
const NEW_TEST_TEXT = "This is new note text.";

it('creates an addNote action', () => {
  
  const action = addNote(NOTE_TEST_TEXT, "red", 100, 400);
  
  expect(action.type).toEqual("ADD_NOTE");
  expect(action.text).toEqual(NOTE_TEST_TEXT);
  expect(action.id).toBeTruthy();
  expect(action.colour).toEqual("red");
  expect(action.left).toEqual(100);
  expect(action.top).toEqual(400);
});

it('creates an updateNote action', () => {
  
  const action = updateNoteText(NEW_TEST_TEXT, 12345);
  
  expect(action.type).toEqual("UPDATE_NOTE_TEXT");
  expect(action.text).toEqual(NEW_TEST_TEXT);
  expect(action.id).toEqual(12345);
});

it('creates an updateNotePosition action', () => {
  
  const action = updateNotePosition(100, 400, 12345);
  
  expect(action.type).toEqual("UPDATE_NOTE_POSITION");
  expect(action.id).toEqual(12345);
  expect(action.left).toEqual(100);
  expect(action.top).toEqual(400);
});

it('creates an initNotes action', () => {
  
  const action = initNotes();
  
  expect(action.type).toEqual("INIT_NOTES");

});
