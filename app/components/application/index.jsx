import React, { Component } from 'react';
import Spinner from 'lib/spinner';

export default class Application extends Component {
  componentDidMount() {
    Spinner.configure({
      parent: '.app',
      showSpinner: false
    });
  }

  render() {
    return (
      <main>
        { this.props.children }
      </main>
    );
  }
}
