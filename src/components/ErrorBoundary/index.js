import React, { Component } from "react";
import styles from "./index.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div className={styles["boundary"]}>
          <div className={styles["boundary-wrapper"]}>
            <h2 className={styles["title"]}>Something went wrong.</h2>
            <details className={styles["details"]}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

// Примечание

// Предохранители не поймают ошибки в:

// обработчиках событий (подробнее);
// асинхронном коде (например колбэках из setTimeout или requestAnimationFrame);
// серверном рендеринге (Server-side rendering);
// самом предохранителе (а не в его дочерних компонентах).
