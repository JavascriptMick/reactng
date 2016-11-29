import { takeLatest, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { fetchFailed, addNoteFromServer, updateNoteFromServer } from '../actions'
import NotesDataService from './notes.data.service'

var notesDataService = new NotesDataService();


export function* watchInit() {
  yield takeLatest('INIT_NOTES', init)
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

//spin around posting dirty notes to the server and dispatching an update
function* postToBackend() {
  try{
    var x = 20
    while(x-- > 1) {
      let notes = yield select((state) => state.notes); // <-- ask middleware for the notes state
      let filteredNotes = notes.filter(note => (note.dirty===true));
      for(var i = 0; i < filteredNotes.length; i++){
        let updatedNote = yield call (notesDataService.addOrUpdateNote, notes[i]);
        yield put(updateNoteFromServer(updatedNote))
      }
      yield call(delay, 1000);  //debounce
    }
  } catch (e) {
      yield put(fetchFailed(e.message));
   }
}

export function* helloSaga() {
  //debugger;
  console.log('Hello Sagas!')
}

function* notesEffects() {
  yield [
    helloSaga(),
    watchInit(),
    postToBackend()
  ]
}

// export default function* rootSaga() {
//   yield [
//     helloSaga(),
//     watchIncrementAsync()
//   ]
// }
 
export default notesEffects;