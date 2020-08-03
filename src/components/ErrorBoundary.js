import React,{ Component } from 'react'

class ErrorBoundary extends Component {
    state = {
      hasError: false
    }
  
    static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { hasError: true };
  }
  
    componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.log(error, info);
  }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <p>Something broke</p>;
      }
      return this.props.children;
    }
  };

  export default ErrorBoundary;