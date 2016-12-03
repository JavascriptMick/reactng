import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects'
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { NotesDataService } from '../services/notes.data.service';
import { Note, AppStateNotes } from '../notes.model';
import { ActionTypes, updateNoteFromServer, fetchFailed, updateFailed, addNoteFromServer } from '../actions/actions';


@Injectable()
export class NotesEffects {
  constructor(private notesDataService: NotesDataService, private actions$: Actions, private store$: Store<AppStateNotes>) {}

    //subscribe to state changes and post dirty notes to the server, dispatch an update action when done. 
    @Effect() postToBackend$ = this.store$
    .map(updatedAppState => updatedAppState.notes)
    .mergeMap(notes => Observable.from(notes))  //treat each note seperately
    .filter((note:Note) => (note.dirty==true))
    .switchMap((updatedNote:Note) => this.notesDataService.addOrUpdateNote(updatedNote)
      .map((responseNote:Note) => (updateNoteFromServer(responseNote)))
      .catch((e) => Observable.of(updateFailed(e.message)))
    )

  @Effect() init$ = this.actions$
    .ofType(ActionTypes.INIT_NOTES)
    .switchMap(() => this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes))
      .map(responseNote => (addNoteFromServer(responseNote)))
      .catch((e) => Observable.of(fetchFailed(e.message)))
    )
}