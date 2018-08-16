import React from 'react';
var dateFormat = require('dateformat');
class DateFormat extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <span>
                {dateFormat(this.props.date, "dddd, dS mmmm yyyy")}
            </span>
        )
    }
} 
export default DateFormat;