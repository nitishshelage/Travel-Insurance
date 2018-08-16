import React from 'react';
import './acknowledgement.css';
import UserButton from '../shared/user-button/user-button'
import {Panel} from 'react-bootstrap';
import DateFormat from '../shared/date-format/date-format';
import {Glyphicon} from 'react-bootstrap';
class Acknowledgement extends React.Component{
    constructor(props){
        super();
        this.state = {
           date : new Date()
        }
    }
    nextPageEvent =() =>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="ack">
              <Panel>
                <Panel.Body>
                    <div>
                        <h4><Glyphicon glyph="glyphicon glyphicon-ok-circle" /> Congratulations!</h4>
                        <span>Your insurance purchase is confirmed on <DateFormat date={this.state.date}/>.</span>
                        <div><span>A confirmation email is on its way.</span></div>
                    </div>
                </Panel.Body>
              </Panel>
               <UserButton text="Buy new policy" btnClass="text-center" clickEvent={this.nextPageEvent}/>
            </div>
        )
    }
}
export default Acknowledgement;