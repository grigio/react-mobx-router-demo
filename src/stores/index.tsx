import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore } from 'mobx-react-router'
import { counterStore } from './counter'

export const browserHistory = createBrowserHistory();
export const routingStore = new RouterStore();
export { counterStore }