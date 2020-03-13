import React from 'react';


// base_url = 'https://swapi.co/api/';
// search_url = 'https://swapi.co/api/people/?search';

class FetchStarWars extends React.Component {

  state = {
    loading: true,
    people: null,
  };

  async componentDidMount() {
    const url = 'https://swapi.co/api/';
    const query = 'people/:id/'
    const response = await fetch(url + query);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }



  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    if (!this.state.person) {
      return <div>Didn't get a person</div>;
    }
    return (
      <div>
        {this.state.loading || this.state.people ? (
          <div>loading...</div>
        ) : (
            <div>
              <div>{this.state.people.name}</div>
              <div>{this.state.people.name.gender}</div>
              <div>{this.state.people.name.vehicles}</div>
            </div>
          )}
      </div>
    )
  }

}

export default FetchStarWars;