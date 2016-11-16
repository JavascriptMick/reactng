import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app/App';
import notesApp from './app/notes/reducers'
import './index.css';

let store = createStore(notesApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);