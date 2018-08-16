import React from 'react';
import './contact-info.css';
class ContactDetails extends React.Component{
    constructor(props){
        super();
       this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
       
    }
    handleChange(event) {
     this.props.updateData(event);
    }
     render(){
        const isEdit = this.props.name.showEdit;
               
        if (isEdit) {
            return(
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                            Given names
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <input name="givenName" type="text" value={this.props.name.givenName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row top-space">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                            Family name
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <input name="familyName" type="text" value={this.props.name.familyName}  onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                        Given names
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <b>{this.props.name.givenName}</b>
                    </div>
                </div>
                <div className="row top-space">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                        Family name
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <b>{this.props.name.familyName}</b>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactDetails;