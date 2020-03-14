import React, { Component } from 'react'
import "./Car.css"
import PropTypes from 'prop-types'

class Car extends Component{

    // componentWillReceiveProps(nextProps){
    //     console.log('Car componentWillReceiveProps',nextProps) 
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('Car shouldComponentUpdate',nextProps, nextState)
    //     return nextProps.name.trim() !== this.props.name.trim()
    // }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('Car componentWillUpdate', nextProps,nextState)
    // }
    // componentDidUpdate(){
    //     console.log('Car componentDidUpdate')
    // }

    render(){
        

        // if(Math.random() > .7){
        //     throw new Error('Car random failed');
            
        // }

        return(
            <div className = "Car">
                <h1>{this.props.name}</h1>
                <h2>{this.props.year}</h2>
                <input type = "text" 
                    placeholder = "Mashina nomini kiriting !" 
                    onChange = {this.props.onChangeName} 
                    value = {this.props.name}
                />
                <button onClick = {this.props.onDelete}>Delete</button>
            </div>
        )
    }

}
    Car.propTypes = {
        name:PropTypes.string,
        year:PropTypes.number,
        onChangeName:PropTypes.func,
        value:PropTypes.string,
        onDelete:PropTypes.func
        

    }

export default Car;