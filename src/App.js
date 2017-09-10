import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar } from 'material-ui';
import ls from 'local-storage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.setupLocalStorage();
  }

  setupLocalStorage() {
    if (!ls.get('wordLists')) {
      ls.set('wordLists', []);
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar title="My word lists" />
          {
            ls.get('wordLists').length === 0 && <p>There are no word lists saved.</p>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
