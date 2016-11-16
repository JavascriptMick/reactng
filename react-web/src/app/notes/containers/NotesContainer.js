import { connect } from 'react-redux'
import { updateNoteText, updateNotePosition } from '../actions'
import Notes from '../components/Notes'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNoteText: (id, newText) => {
      dispatch(updateNoteText(newText, id))
    },
    onChangeNotePosition: (id, newPosition) => {
      dispatch(updateNotePosition(newPosition.left, newPosition.top, id))
    }
  }
}

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)

export default NotesContainer