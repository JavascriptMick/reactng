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
  providers: [NotesService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {
  $notes: Observable<Note[]>
  notesService: NotesService;
  
  constructor(notesService: NotesService) {
    this.notesService = notesService;
    this.$notes = this.notesService.getNotes();
  }
  
  onAddNote(colour){
    this.notesService.addNote("", colour, 200, 100);
  }
  
  onChangeNoteText(newText: string, id: number){
    this.notesService.updateNoteText(newText, id);
  }

  onChangeNotePosition(newPosition: any, id: number){
    this.notesService.updateNotePosition(newPosition.left, newPosition.top, id);
  }

  ngOnInit() {
    this.notesService.initNotes();
  }

}
