import React from 'react';
import './index.css';


class Form extends React.Component {
  state = {
    people: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };


  render() {
    return (
      <form>
        <input
          value={this.state.people}
          onChange={e => this.setState({ people: e.target.value })} type="text" placeholder="Looking for someone?"
          name="search-name" />
        {/* <br /> */}
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}


export default Form;