import React, { Component } from 'react';


// base_url = 'https://swapi.co/api/';
// search_url = 'https://swapi.co/api/people/?search';
const API = 'https://swapi.co/api/'
const Query = 'people/'

class Swapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + Query)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    return (
      <ul>

      </ul>
    );
  }
}


export default Swapi;