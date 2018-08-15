import React from 'react';
import './contact.css';
import ContactInfo from '../contact-info/contact-info';
import {Button} from 'react-bootstrap'
class Contact extends React.Component{
    constructor(props){
        super();
      
    }
   


    render(){
        return(
            <div>
               <ContactInfo />
               <div className="text-right">
                <Button className="btn btn-danger btn-lg float-right">Confirm</Button>
                </div>
            </div>
        )
    }
}
export default Contact;