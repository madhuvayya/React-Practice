
import React from 'react';
import ReactDOM from 'react-dom';

class OnclickEvent extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

export default OnclickEvent;