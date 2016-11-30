import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NotesComponent }   from './components/notes.component';
import { NoteComponent }   from './components/note.component';
import { AddButtonComponent }   from './components/add.button.component';
import { NotesService } from './services/notes.service';
import { NotesDataService } from './services/notes.data.service';
import { UUID } from 'angular2-uuid';

import { NotesEffects } from './effects/notes.effects';
import { notes } from './reducers/notes.reducer';

import { Draggable } from '../shared/draggable';


@NgModule({
  imports: [ 
    BrowserModule,
    StoreModule.provideStore({notes}, {notes:[]}),
    EffectsModule.run(NotesEffects)
    ],
  exports: [NotesComponent],
  declarations: [AddButtonComponent, NoteComponent, NotesComponent, Draggable ],
  providers: [ NotesService, NotesDataService, UUID ],
})
export class NotesModule {}