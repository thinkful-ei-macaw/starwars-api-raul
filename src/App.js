import React from 'react';
import './index.css'
import Form from './Form';

class App extends React.Component {


  base_url = 'https://swapi.co/api/';
  search_url = 'https://swapi.co/api/people/?search';






  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <h1>StarWars Kiosk</h1>
        </header>
        <main className='App_main'>
          <Form />
        </main>
      </div>
    )
  }
}

export default App;