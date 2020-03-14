import React, { Component } from 'react'

export default class Counter extends Component{
    state = {
        count:0
    }
    counterAdd = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState((stateProps)=>{
            return {
                count: stateProps.count + 1
            }
        })
    }
    render(){
       return(
            <React.Fragment>
                <h1>Counter {this.state.count}</h1>
                <button onClick = {this.counterAdd}>+</button>
                <button onClick = {() => this.setState({count:this.state.count-1})}>-</button>
            </React.Fragment>
        )
    }
}