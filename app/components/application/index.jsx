import React from 'react';
import Spinner from 'lib/spinner';

export default class Application extends React.Component {
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
