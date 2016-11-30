import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  onClick($event){
    $event.preventDefault();
    this.props.add(this.props.colour);
  }

  render(){
    return (
      <a href='#' onClick={this.onClick.bind(this)} className={this.props.colour + 'Button'}>+</a>
      );
  }
}

export default AddButton;