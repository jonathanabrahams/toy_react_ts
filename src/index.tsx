import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addItem } from "./actions"
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store"

store.dispatch(addItem("Item1"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();