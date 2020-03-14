import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
  state = {
    done: false,
    important: false
  }
  onClickLabel = () => {
   this.setState(({done}) => {
     return {
       done:!done
     }
   })
  }

  onClickbutton = () => {
    this.setState(({important}) => {
      return {important: !important}
      
    })
    
  }

   render(){
    const { label, onDelete } = this.props;
    const { important, done } = this.state

    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    let classNames = "todo-list-item";
    // const done = this.state.done;
    
      if(done){
        classNames += ' done'
      }

      if(important){
        classNames += ' important'
      }
    
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          // style={style}
          onClick = {() => this.onClickLabel()}
          >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right" onClick = {this.onClickbutton}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right" onClick = {onDelete}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
   }
}


