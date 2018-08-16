import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {ProgressBar} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      progress: 35
    }
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      switch(location.pathname){
        case '/':
          this.setState({progress: 35});
        break;
        case '/review':
        this.setState({progress: 70});
        break;
        case '/acknowledgement':
        this.setState({progress: 100});
        break;
        default:
        break;
      }
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }
  render() {
    return (
      <div className="App container-fluid">
       <h3 className="header-style text-muted">Your Travel Insurance</h3>
       <div className="row txt-sz">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-uppercase">
          1. Personal Details
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-uppercase">
          2. Review
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-uppercase">
          3. Acknowledgement
        </div>
       </div>
       <ProgressBar bsStyle="danger" now={this.state.progress} />
       {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
