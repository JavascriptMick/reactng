import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { addNote, updateNoteText, updateNotePosition, initNotes } from '../actions/actions';
import { Note, AppStateNotes } from '../notes.model';

@Injectable()
export class NotesService {
    store: Store<AppStateNotes>;

    constructor(store: Store<AppStateNotes>){
        this.store = store;
    }

    getNotes(): Observable<Note[]>{
      return this.store.select<Note[]>('notes');
    }

    updateNoteText(text: string, id: string): void{
      this.store.dispatch(updateNoteText(text, id));
    }
    
    addNote(text: string, colour: string, left: number, top: number): void{
      this.store.dispatch(addNote(text, colour, left, top));
    }
    
    updateNotePosition(left: number, top: number, id: string): void{
      this.store.dispatch(updateNotePosition(left, top, id))
    }
    
    initNotes(): void{
        this.store.dispatch(initNotes());
    }
}