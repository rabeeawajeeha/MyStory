import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      guides: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/guides')
      .then(res => res.json())
      .then(guides => this.setState({guides}, () => console.log('Guides fetched...', guides)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Tripster</h2>
        <ul>
        {this.state.guides.map(guide =>
          <li key={guide.id}><img src="images/guides/{guide.imgURL}" alt="Profile" />{guide.firstName} {guide.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
