import React from 'react';
import './index.css'
import Form from './Form';

class App extends React.Component {





  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <h1>StarWars kiosk</h1>
        </header>
        <main className='App_main'>
          <Form />
        </main>
      </div>
    )
  }
}

export default App;