import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/mergeMap';

import { Note, AppStateNotes } from '../notes.model';
import { NotesDataService } from './notes.data.service';
import { addNote, updateNoteText, updateNotePosition, initNotes } from '../actions/actions';

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
      this.store.dispatch(addNote(text, colour, left, top));
    }

    updateNoteText(text: string, id: string): void{
      this.store.dispatch(updateNoteText(text, id));
    }
    
    updateNotePosition(left: number, top: number, id: string): void{
      this.store.dispatch(updateNotePosition(left, top, id))
    }
    
    initNotes(): void{
        this.store.dispatch(initNotes());
    }

}