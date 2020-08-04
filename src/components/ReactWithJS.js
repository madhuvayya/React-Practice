import React, { Component }  from 'react'

class ReactWithJS extends Component {
    render() {
      return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
  }
  
// ReactDOM.render(
//     React.createElement(Hello, {toWhat: 'World'}, null),
//     document.getElementById('root')
// );

export default ReactWithJS;