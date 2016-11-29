import NotesDataService from './notes.data.service'


it('updates a note', () => {
  const notesDataService = new NotesDataService();
  var returnedNote = notesDataService.addOrUpdateNote(
    {
      "id": 1,
      "text": "Updated first Note",
      "colour": "red",
      "left": 200,
      "top": 100
    }
  )

  // notePromise.then( (returnedNote) => {
    // console.log(`returnedNote: ${JSON.stringify(returnedNote)}`)
    expect(returnedNote.colour).toEqual("re,kkkkd");
  // });


  
});

