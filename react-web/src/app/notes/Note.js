import React, { Component } from 'react';
import './Note.css';
import draggable from '../shared/draggable'

//extend the textarea with draggable behaviour by employing a Higher Order Component function (HOC) https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
const PositionedTextArea = (props) => { return ( <textarea  {...props} />); }
let DraggableTextArea = draggable(PositionedTextArea)

class Note extends Component {
  handleChangeNoteText($event){
    this.props.changeNoteText($event.target.value);
  }

  handleChangeNotePosition($event){
    this.props.changeNotePosition($event.target.value);
  }

  render(){
    //onBlur, disabled, className and defaultValue belong to the textarea, left, top and onEndDrag will be 'consumed' by the draggable HOC
    return (
      <DraggableTextArea
        top={this.props.top}
        left={this.props.left}
        onEndDrag={this.handleChangeNotePosition.bind(this)}
        onBlur={this.handleChangeNoteText.bind(this)}
        disabled={this.props.disabled} 
        className={this.props.colour + '-note'}
        defaultValue={this.props.text}
        />
      );
  }
}

export default Note;