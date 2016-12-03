import { takeLatest, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { fetchFailed, addNoteFromServer, updateNoteFromServer } from '../actions/Actions'
import NotesDataService from '../services/NotesDataService'
import {ActionTypes} from '../actions/Actions'

var notesDataService = new NotesDataService();


export function* watchInit() {
  yield takeLatest(ActionTypes.INIT_NOTES, init)
}

// worker Saga: will be fired on INIT_NOTES action 
function* init(action) {
   try {
     const notes = yield call (notesDataService.getNotes);
     yield* notes.map((note) => {
       return put(addNoteFromServer(note));
     })
   } catch (e) {
      yield put(fetchFailed(e.message));
   }
}

//spin every second and post dirty notes to the server,  dispatching an update action when done.
function* postToBackend() {
  try{
    while(true) {
      let notes = yield select((state) => state.notes);   // ask middleware for the notes state
      let filteredNotes = notes.filter(note => (note.dirty===true));
      for(var i = 0; i < filteredNotes.length; i++){      //treat each note seperately
        let updatedNote = yield call (notesDataService.addOrUpdateNote, filteredNotes[i]);
        yield put(updateNoteFromServer(updatedNote))
      }
      yield call(delay, 1000);                            //wait a second
    }
  } catch (e) {
      yield put(fetchFailed(e.message));
   }
}

function* notesEffects() {
  yield [
    watchInit(),
    postToBackend()
  ]
}
 
export default notesEffects;