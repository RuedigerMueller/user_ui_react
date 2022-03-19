import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { App } from './App';
import './index.css';
import reducer from './store/reducer';
import { AppAction, AppState, DispatchType } from './type';

const store: Store<AppState, AppAction> & {
  dispatch: DispatchType
} = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
