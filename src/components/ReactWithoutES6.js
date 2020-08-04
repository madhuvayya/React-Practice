import React from 'react'
import createReactClass from "create-react-class";

var ReactWithoutES6 = createReactClass({
    getInitialState: function() {
      return {message: 'Hello!'};
    },
  
    handleClick: function() {
      alert(this.state.message);
    },
  
    render: function() {
      return (
        <button onClick={this.handleClick}>
          Say hello
        </button>
      );
    }
  });

  export default ReactWithoutES6;