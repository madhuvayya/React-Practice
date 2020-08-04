import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from './BuggyCounter' 

function ErrorBoundaryImpl() {
    
    // const refreshPage = () => {
    //   history.go(0)
    // }  
    
    return (
      <div>
        <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <button>
          Refresh Page
        </button>
      </div>
    );
}

export default ErrorBoundaryImpl;