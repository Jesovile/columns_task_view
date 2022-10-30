import React, { Component } from "react";

function ErrorBoundaryHOC(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
    }

    static displayName = "High Order Components - ErrorBoundary";

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo,
      });
    }

    render() {
      if (this.state.hasError) {
        return <div>Bad Render Component</div>
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default ErrorBoundaryHOC
