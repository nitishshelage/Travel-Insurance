import React, { Component } from 'react';
import Contact from './contact/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3 className="header-style text-muted">Your Travel Insurance</h3>
       <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 text-uppercase bottom-border">
          1. Personal Details
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 text-uppercase bottom-border">
          2. Review
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-uppercase bottom-border">
          3. Acknowledgement
        </div>
       </div>
       <Contact />
      </div>
    );
  }
}

export default App;
