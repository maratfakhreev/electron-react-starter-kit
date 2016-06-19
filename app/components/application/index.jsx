import React from 'react';

export default class Application extends React.Component {
  render() {
    return (
      <main>
        <h1>TEST</h1>
        { this.props.children }
      </main>
    );
  }
}
