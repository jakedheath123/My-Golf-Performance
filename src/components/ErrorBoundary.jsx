import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null, redirect: false};
  }
    
  componentDidCatch(error, errorInfo) {
    this.setState({
      error, 
      errorInfo
    })
    console.error("ErrorBoundary has caught an error", error, errorInfo)
  }
 
  render() {
    if (this.state.errorInfo) {
      setTimeout(() => {
        this.setState({redirect: true})
      }, 5000)
      
      return (
        <>
        {!this.state.redirect ? <>
        <p>SORRY THERE HAS BEEN AN ERROR, REDIRECTING</p>
        <CircularProgress color="inherit" />
        </> : null}
        {this.state.redirect && <h1>REDIRECTED PAGE</h1>}
        </>
      )
    }

    return this.props.children
  } 
}

export default ErrorBoundary;