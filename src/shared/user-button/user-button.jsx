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
        var disabled = this.props.disable;
        var btn;
        if(disabled){
            btn = <Button className="btn btn-danger btn-lg" onClick={()=>this.handleClick()} disabled>{this.props.text}</Button>;
        } else {
            btn = <Button className="btn btn-danger btn-lg" onClick={()=>this.handleClick()}>{this.props.text}</Button>;
        }
        return(
            <div className={`${ this.props.btnClass }`}>
                 {btn}
            </div>
        )
    }
}
export default UserButton;