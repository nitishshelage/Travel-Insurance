import React from 'react';
import './contact-info.css';
import {Button, Glyphicon} from 'react-bootstrap';
import ContactDetails from './contact-details';
class ContactInfo extends React.Component{
    constructor(props){
        super();
        this.state={
            givenName:'',
            familyName:'',
            showEdit: false
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }
    componentDidMount(){
        fetch('data/data.json').then(res => res.json())
        .then(
          (result) => {
            this.setState({
              givenName: result.name,
              familyName: result.surname,
              showEdit: false
            });
          },
          (error) => {
           
          }
        )
    }
    handleEditClick() {
        this.setState({showEdit: true});
    }
    handleSaveClick() {
        this.setState({showEdit: false})
    }
    
    updateContent(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        const isEdit = this.props.isEdit;
        let button;
        if (isEdit) {
            if(this.state.showEdit){
                button =  <Button className="btn-style" bsStyle="success" onClick={this.handleSaveClick}><Glyphicon glyph="glyphicon glyphicon-ok" /> Save</Button>;
            } else {
                button = <Button className="btn-style" bsStyle="link" onClick={this.handleEditClick}> <Glyphicon glyph="glyphicon glyphicon-pencil" /> Edit</Button>;
            }
        } else {
          button = null;
        }
        return(
            <div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <h3 className="verticalLine">
                            <span className="text-style text-muted">Contact details</span>
                        </h3>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                     {button}
                    </div>
                </div>
              
                <h5 className="left-space">*Marked fields must be completed, and can only be completed in English.</h5>
                <ContactDetails name={this.state} updateData={this.updateContent}/>
            </div>
        )
    }
}
export default ContactInfo;