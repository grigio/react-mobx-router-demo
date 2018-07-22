import * as React from 'react';
import { inject, observer } from 'mobx-react';

import './App.css';
import logo from './logo.svg';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

@inject('routing', 'counterStore')
@observer
export class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Mobx + React Router V4</h1>
        </header>
        <p className="App-intro">
          <Link to="/counter">Counter</Link>,
          <Link to="/about">About</Link>
        </p>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

// NOTE: hack https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default withRouter(App)