import React from 'react';
import { getMuiTheme } from 'material-ui/styles';
import { MuiThemeProvider } from 'material-ui/styles';

export default class Application extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        { this.props.children }
      </MuiThemeProvider>
    );
  }
}
