import React, { Component } from 'react'

class MessageState extends Component {
    
    constructor(){
        super();
        this.state = {
            message : 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message:'Thank you visit again'
        }) 
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick= {() => this.changeMessage() }>click</button>
            </div>
        )
    } 
}

export default MessageState