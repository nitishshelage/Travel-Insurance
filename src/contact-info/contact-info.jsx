import React from 'react';
import './contact-info.css';

class ContactInfo extends React.Component{
    constructor(props){
        super();
        this.state={
            givenName:'',
            familyName:''
        }
    }
    componentDidMount(){
        fetch('data/data.json') .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              givenName: result.name,
              familyName: result.surname
            });
          },
          (error) => {
           
          }
        )
    }


    render(){
        return(
            <div>
                <h3 className="verticalLine">
                    <span className="text-style text-muted">Contact details</span>
                </h3>
                <h5 className="left-space">*Marked fields must be completed, and can only be completed in English.</h5>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                        Given names
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        {this.state.givenName}
                    </div>
                </div>
                <div className="row top-space">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                        Family name
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        {this.state.familyName}
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactInfo;