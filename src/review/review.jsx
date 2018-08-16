import React from 'react';
import './review.css';
import {withRouter} from 'react-router-dom';
import ContactInfo from '../contact-info/contact-info';
import UserButton from '../shared/user-button/user-button'
class Review extends React.Component{
    constructor(props){
        super();
    }
    nextPageEvent =() =>{
        this.props.history.push('/acknowledgement');
    }
    render(){
        return(
            <div>
                <h2 className="text-muted">Review and confirm</h2>
               <ContactInfo isEdit={true}/>
               <UserButton text="Buy now" btnClass="text-right" clickEvent={this.nextPageEvent}/>
            </div>
        )
    }
}
export default withRouter(Review);