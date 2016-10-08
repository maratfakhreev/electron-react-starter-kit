import React, { Component } from 'react';
import config from 'config';

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <h1 className="home__title">ElectronReact starter kit</h1>
        <span className="home__version">{ config.version }</span>
      </section>
    );
  }
}
