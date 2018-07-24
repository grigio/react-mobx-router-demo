import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';
import { Redirect } from 'react-router-dom'

import App from './containers/App';
import CounterPage from './containers/CounterPage'
import { routingStore, browserHistory, counterStore} from './stores'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// Stores

const stores = {
  counterStore,
  routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

// Pages
const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>Just a boilerplate to test React + Mobx + React Router V4</p>
  </div>
)

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <>

        <App>
          <Route path="/counter" component={CounterPage} />
          <Route path="/about" component={AboutPage} />

          <Route exact={true} path="/" render={() => (
            <Redirect to="/counter" />
          )} />
        </App>

      </>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
