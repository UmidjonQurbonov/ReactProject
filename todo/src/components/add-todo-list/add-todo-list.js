import React, {Component} from 'react'
import './add-todo-list.css'

class AddTodoList extends Component{
    state = {
        text: ''
    }


    onChangeInput = (event) => {
        this.setState({
            text:event.target.value
        })
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        
        this.setState({
            text:''
        })
    }
    render(){
        return(
            <form className = "item-add-form d-flex"
                onSubmit = {this.onSubmit}>
                <input 
                    type = "text"
                    className = "form-control"
                    onChange = {this.onChangeInput}
                    placeholer = "What needs to be done"
                    style = {{marginRight:'10px'}}
                    value = {this.state.text}
                />
                <button className = "btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}

export default AddTodoList;