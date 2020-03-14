import React from 'react';
import './index.css'
import Form from './Form';
import Swapi from './Swapi';

class App extends React.Component {





  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <h1>StarWars kiosk</h1>
        </header>
        <main className='App_main'>
          <Form onSubmit={Swapi} />
        </main>
      </div>
    )
  }
}

export default App;