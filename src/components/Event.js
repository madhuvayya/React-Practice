import React from 'react'

class Event extends React.Component {
    shoot() {
      alert("Great Shot!");
    }
    render() {
      return (
        <button onClick={this.shoot}>Take the shot!</button>
      );
    }
  }
  
export default Event;