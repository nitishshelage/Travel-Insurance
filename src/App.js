import React, { Component } from 'react';
import Contact from './contact/contact';
import Review  from './review/review';
import Acknowledgement from './acknowledgement/acknowledgement';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super();
   
  }
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
       <BrowserRouter>
          <div>
            <Route  exact path="/" component={Contact}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/acknowledgement" component={Acknowledgement}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
