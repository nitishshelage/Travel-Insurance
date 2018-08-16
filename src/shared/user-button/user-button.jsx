import React from 'react';
import './user-button.css';
import {Button} from 'react-bootstrap'
class UserButton extends React.Component{
    constructor(props){
        super();
      
    }
    handleClick = ()=> {
        this.props.clickEvent();
      }
    
    render(){
        return(
            <div className={`${ this.props.btnClass }`}>
                 <Button className="btn btn-danger btn-lg" onClick={()=>this.handleClick()}>{this.props.text}</Button>
            </div>
        )
    }
}
export default UserButton;