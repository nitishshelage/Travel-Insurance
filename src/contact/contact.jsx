import React from 'react';
import './contact.css';
import {withRouter} from 'react-router-dom';
import ContactInfo from '../contact-info/contact-info';
import UserButton from '../shared/user-button/user-button'
class Contact extends React.Component{
    constructor(props){
        super();
    }
    nextPageEvent =() =>{
        this.props.history.push('/review');
    }
    render(){
        return(
            <div>
               <ContactInfo isEdit={false}/>
               <UserButton text="Confirm" btnClass="text-right" disable={false} clickEvent={this.nextPageEvent}/>
            </div>
        )
    }
}
export default withRouter(Contact);