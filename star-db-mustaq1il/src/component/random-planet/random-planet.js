import React, { Component } from 'react';
import malumotOlishClass from '../../service/swapi-service';
import './random-planet.css';
import Snipper from '../snipper';
import ErrorIndicator from '../error-indicator/error-indicator';


export default class RandomPlanet extends Component {
  state = {
    planet:{},
    loading:true,
    error: false,
    shart:false
  }
  constructor(){
    super();
  }

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet(),500);
    clearInterval(this.interval);
  }
  obyektOlish = new malumotOlishClass();
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading:false
    })
  }

  onError = (err) => {
    this.setState({
      error:true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 5;
    this.obyektOlish.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
      
  }

 
  
  render() {
    const { planet,loading, error } = this.state;
    
    const hasError = (loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const snipper = loading ? <Snipper/> : null;
    const planetView = hasError ?  null : <PlanetView planet ={planet} /> 

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {snipper}
        {planetView}

      </div>

    );
  }
}


const PlanetView = ({ planet }) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
       <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
             
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>

      {/* <a onClick = {this.toggleRandomPlanet} className = "toggleRandomPlanet" href="#">Toggle Random Planet</a> */}
    </React.Fragment>
  )

}