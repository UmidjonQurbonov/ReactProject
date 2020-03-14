import React, { Component } from 'react';

import './item-list.css';
import malumotOlishClass from '../../service/swapi-service';
import Snipper from '../snipper/'

export default class ItemList extends Component {
  state = {
    peopleList : null
  }
  malumotOlish = new malumotOlishClass();

  componentDidMount(){
    this.malumotOlish.getAllPeople()
    .then((peopleList) => {
      this.setState({
        peopleList
      })
    })
  }


  
  render() {

    const { peopleList } = this.state;

    if(!peopleList) {
      return <Snipper />
    }

    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
    );
  }
}
