import React from "react";

export default function draggable(TargetComponent){
  return class DraggableComponent extends React.Component{
    constructor(props){
      super(props);
      this.isDragging = false;
      this.originalClientX = 0;
      this.originalClientY = 0;
      this.originalTop = 0;
      this.originalLeft = 0;
      this.state = {
        top: this.props.top + 'px',
        left: this.props.left + 'px'
      }   
    }

    render(){
      let dragStyle = {position: 'absolute', top: this.state.top ,left: this.state.left};
      const newProps = {
        style: dragStyle,
        onMouseDown: this.onMouseDown.bind(this),
        onMouseMove: this.onMouseMove.bind(this),
        onMouseUp: this.onMouseUp.bind(this)
      };

      //we don't know what props the target will need but we can assume that draggable is 'consuming' top, left and onEndDrag so we will pass all but these
      const passProps = Object.assign({}, this.props);
      delete passProps.top;
      delete passProps.left;
      delete passProps.onEndDrag;

      return (
        <TargetComponent  {...passProps} {...newProps}/>
        );
    }

    onMouseDown($event){
        if($event.target.style.position==='absolute' && $event.target.style.left && $event.target.style.top){
        this.isDragging = true;
        this.originalLeft = parseInt($event.target.style.left, 10);
        this.originalTop = parseInt($event.target.style.top, 10);
        this.originalClientX = $event.clientX;
        this.originalClientY = $event.clientY;    
      }else{
        console.log('draggable: Error! the annotated ' + $event.target.nodeName + ' element needs to be inline styled with position, top and left');
      }
    }

    onMouseMove($event){
      if(this.isDragging===true){
        this.setState({
          top: this.originalTop + ($event.clientY - this.originalClientY),      
          left: this.originalLeft + ($event.clientX - this.originalClientX)
        });
      }
    }

    onMouseUp($event){
      if(this.isDragging===true){
        this.isDragging = false;
        if(this.props.onEndDrag){
          this.props.onEndDrag({left: this.originalLeft + ($event.clientX - this.originalClientX), top: this.originalTop + ($event.clientY - this.originalClientY)});
        }
      } 
    }
  };
}