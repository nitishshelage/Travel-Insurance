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
        var isEdit = this.props.name.showEdit;
        var errGName = this.props.name.givenName.trim() === '' ? true : false;
        var errFName = this.props.name.familyName.trim() === '' ? true : false;
        var reqGName;
        var reqFName;
        if(this.props.showError && errGName){
            reqGName = <span className="text-danger"> *Required</span>
        } else {
            reqGName = null;
        }
        if(this.props.showError && errFName){
            reqFName = <span className="text-danger"> *Required</span>
        } else {
            reqFName = null;
        }
        if (isEdit) {
            return(
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                            Given names
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <input name="givenName" type="text" value={this.props.name.givenName} onChange={this.handleChange}/>
                            {reqGName}
                        </div>
                    </div>
                    <div className="row top-space">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-muted">
                            Family name
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <input name="familyName" type="text" value={this.props.name.familyName}  onChange={this.handleChange}/>
                            {reqFName}
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