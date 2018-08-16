import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Contact from './contact/contact';
import Review  from './review/review';
import Acknowledgement from './acknowledgement/acknowledgement';


ReactDOM.render(<BrowserRouter>
    <App>
      <Route  exact path="/" component={Contact}/>
      <Route exact path="/review" component={Review}/>
      <Route exact path="/acknowledgement" component={Acknowledgement}/>
    </App>
  </BrowserRouter>, document.getElementById('root'));

