import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import AddTodoList from '../add-todo-list/add-todo-list';


export default  class App extends Component{
  
  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ],
    text:"Hello world",
    maxId: 0,
    term: ''
  }
  onDelete = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => (el.id === id));
      const newtodoData = [...todoData.slice(0,idx),...todoData.slice(idx+1)];
      return{
        todoData:newtodoData
      }
    })
    
  }

  onAdd = (text) => {
    const newmaxId = this.state.todoData.length;
    const newListItem = {
      label: text,
      important: false,
      id: newmaxId + 1
    }
    
    this.setState(({todoData,maxId})=>{
      const newArr = [...todoData,newListItem];
      return{
        todoData: newArr,
      }
    })
    
  }

  search(todoData, term){
    if(term.length === 0) {
      return todoData
    }

    return todoData.filter((itemData) => {
      return itemData.label.toLowerCase()
      .indexOf(term.toLowerCase()) > -1
    })
  }

  onChangeSearchPanel = (searchText) => {
    this.setState({
      term:searchText
    })
  }
  render(){
    const {todoData, term} = this.state
    const visibleItems = this.search(todoData,term)
  
   return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel onChange = {this.onChangeSearchPanel}/>
          <ItemStatusFilter />
        </div>
  
        <TodoList 
        todos={visibleItems} 
        onDelete = {this.onDelete}
        />
        <AddTodoList onAdd = {(text) => this.onAdd(text)}/>
      </div>
    );
  }
}



