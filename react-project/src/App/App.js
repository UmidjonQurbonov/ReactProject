import React, { Component } from 'react'
import Car from '../car/Car'
import './App.css'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import Counter from '../Counter/Counter'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      carData:[
        {car_name:'Malibu',car_year:2010},
        {car_name:'Nexia',car_year:2005},
        {car_name:'Cobalt', car_year:2013}
      ],
      pageName : "Car Page",
      showCars: false
      
    }

  }

  
  
  toggleButton = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  
  onChangeName(name, index){
    const carIndex = this.state.carData[index];
    carIndex.car_name = name;
    const newCarData = [...this.state.carData];
    newCarData[index] = carIndex;
    this.setState({
      carData:newCarData
    })    
  }
  
  onDelete(index){
    const newCarData = this.state.carData.concat();
    newCarData.splice(index, 1);
    this.setState({
      carData:newCarData
    })
  }
  
  
  // componentWillMount = () => {
  //   console.log("componentWillMount App")
  // }

  
  // componentDidMount = () => {
  //   console.log("componentDidMount App")
  // }
  
  
  render(){
    
    return(
      <div className = "App">
        <h1 className = "styleH1">{this.state.pageName}</h1>
        <Counter/>
        <p><button onDoubleClick = {this.toggleButton}>Double click me plase!</button></p>
        { 
        this.state.showCars ?
          this.state.carData.map((car, index) => {
          return(
          <ErrorBoundry key = {index}>
            <Car 
              name = {car.car_name}
              year = {car.car_year} 
              onChangeName = {(event) => this.onChangeName(event.target.value, index)}
              onDelete = {() => this.onDelete(index)}
                
            />
          </ErrorBoundry>
          )
          })
          :null
          

        }
        
      </div>
    )
  }
}

export default App;
