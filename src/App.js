import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar } from 'material-ui';
import ls from 'local-storage';
import '../styles/app.css';
import WelcomeMessage from './WelcomeMessage';
import PlusIcon from 'material-ui/svg-icons/content/add';

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
          <AppBar title="My word lists" iconElementRight={<PlusIcon style={{ color: 'white', position: 'relative', top: 10, left: -10 }} />} />
          {
            ls.get('wordLists').length === 0 && <WelcomeMessage />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
