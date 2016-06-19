import React from 'react';
import { AppBar } from 'material-ui';

export default class AppBarExampleIcon extends React.Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
