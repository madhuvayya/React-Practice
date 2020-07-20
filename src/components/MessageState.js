import React, { Component } from 'react'

class MessageState extends Component {
    
    constructor(){
        super();
        this.state = {
            message : 'Welcome visitor'
        }
    }

    render() {
    return <h2>{this.state.message}</h2>;
    } 
}

export default MessageState