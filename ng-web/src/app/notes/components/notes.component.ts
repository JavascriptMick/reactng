import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NoteComponent } from './note.component';
import { AddButtonComponent } from './add.button.component';
import { Note } from '../notes.model';
import { NotesService } from '../services/notes.service'

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  $notes: Observable<Note[]>
  notesService: NotesService;
  
  constructor(notesService: NotesService) {
    this.notesService = notesService;
    this.$notes = this.notesService.getNotes();
  }
  
  onAddNote(colour: string){
    this.notesService.addNote("", colour, 200, 100);
  }
  
  onChangeNoteText(newText: string, id: string){
    this.notesService.updateNoteText(newText, id);
  }

  onChangeNotePosition(newPosition: any, id: string){
    this.notesService.updateNotePosition(newPosition.left, newPosition.top, id);
  }

  ngOnInit() {
    this.notesService.initNotes();
  }

}
