import { connect } from 'react-redux'
import { updateNoteText, updateNotePosition, initNotes, addNote } from '../actions/Actions'
import Notes from '../components/Notes'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNoteText: (id, newText) => {
      dispatch(updateNoteText(newText, id));
    },
    onAddNote: (colour) => {
      dispatch(addNote("", colour, 200, 100));
    },
    onChangeNotePosition: (id, newPosition) => {
      dispatch(updateNotePosition(newPosition.left, newPosition.top, id));
    },
    onInit: () => {
      dispatch(initNotes());
    }
  }
}

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)

export default NotesContainer