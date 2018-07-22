import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';
import { Redirect } from 'react-router-dom'
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Stores
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

class CounterStore {
  @observable counter = Number(location.href.split(/\//)[4]) || 1
  @observable isOk = true

  @action setCounter(num: string) {
    this.counter += Number(num)
  }

  @action increment() {
    this.counter += 1
  }

}
const counterStore = new CounterStore()

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

const CounterPage = observer(() => (
  <div>
    <button onClick={() => {
      counterStore.increment()
      routingStore.replace(`/counter/${counterStore.counter.toString()}`)
    }} >Counter: {counterStore.counter}
    </button>
  </div>
))

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
