import React,{ Component} from 'react'

class ComponentDidMount extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 5000)
    }

    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
 export default ComponentDidMount