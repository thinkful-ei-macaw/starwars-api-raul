import React from 'react';
import './index.css';


class Form extends React.Component {
  state = {
    people: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      people: ''
    });
  };



  render() {
    return (
      <form className="form-search">
        <input
          value={this.state.people}
          onChange={e => this.setState({ people: e.target.value })}
          type="text" placeholder="Looking for someone?"
          name="name" required />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}


export default Form;