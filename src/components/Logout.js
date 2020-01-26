import React from "react";

export default (props) =>{
    localStorage.clear('token');
    return (
        <React.Fragment>
        {    
                props.history.push('/react-messageall/signin')
        }
        </React.Fragment>
    )
}