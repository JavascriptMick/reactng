import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/mergeMap';
import { Note, AppStateNotes } from '../notes.model';
import { NotesDataService } from './notes.data.service';
import { UUID } from 'angular2-uuid';

@Injectable()
export class NotesService {
    store: Store<AppStateNotes>;

    constructor(store: Store<AppStateNotes>){
        this.store = store;
    }

    getNotes(): Observable<Note[]>{
      return this.store.select<Note[]>('notes');
    }

    addNote(text: string, colour: string, left: number, top: number): void{
      this.store.dispatch({ type: "ADD_NOTE", payload: {text, colour, left, top, id:UUID.UUID()} });
    }

    updateNoteText(text: string, id: number): void{
      this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id, text: text}})
    }
    
    updateNotePosition(left: number, top: number, id: number): void{
      this.store.dispatch({type: "UPDATE_NOTE_POSITION", payload: {id, left: left, top: top}})
    }
    
    initNotes(): void{
        this.store.dispatch({ type: "INIT_NOTES", payload: { } });
    }

}