import React, { Component } from 'react';

class ClassProps extends Component {
    render() {
        return <div>
                    <h3>Hai {this.props.name}</h3>
                    {this.props.children}     
               </div>
    }
}

export default ClassProps