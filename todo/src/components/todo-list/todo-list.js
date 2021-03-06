import React  from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

 
  
  
  
 
const TodoList = ({todos, onDelete}) => {

    const elements =  todos.map((item) => {
      const { id,term, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
              <TodoListItem
                {...itemProps } 
                onDelete = {() => onDelete(id)}
              />
              {this.children}
            </li>
          );
      }); 
    
  
    return (
      <ul className="list-group todo-list">
      { elements }
      </ul>
    );

  }


export default TodoList;


