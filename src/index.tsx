import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';
import { store } from './store/store';

/*
const store: Store<AppState, AppAction> & {
  dispatch: DispatchType
} = createStore(reducer)
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
