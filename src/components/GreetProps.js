import React from 'react';

const GreetProps = props => { 
    return (
        <div>    
        <h2>Hai {props.name} id {props.id}</h2>
        {props.children}
        </div>
    )
}

export default GreetProps