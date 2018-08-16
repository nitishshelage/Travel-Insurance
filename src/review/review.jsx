import React from 'react';
import './review.css';
import {withRouter} from 'react-router-dom';
import ContactInfo from '../contact-info/contact-info';
import UserButton from '../shared/user-button/user-button'
class Review extends React.Component{
    constructor(props){
        super();
        this.state ={
            disable: false
        }
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
    }
    nextPageEvent =() =>{
        this.props.history.push('/acknowledgement');
    }
    handleNextBtnClick = (args) =>{
        this.setState({disable: args});
    }
    render(){
        return(
            <div>
                <h2 className="text-muted">Review and confirm</h2>
               <ContactInfo isEdit={true} handleBtn={this.handleNextBtnClick}/>
               <UserButton text="Buy now" btnClass="text-right" disable={this.state.disable} clickEvent={this.nextPageEvent}/>
            </div>
        )
    }
}
export default withRouter(Review);