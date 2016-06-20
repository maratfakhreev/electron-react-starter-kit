import React from 'react';
import { AppBar } from 'material-ui';

export default class AppBarExampleIcon extends React.Component {
  render() {
    return (
      <AppBar
        title="Electron-react starter kit"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
