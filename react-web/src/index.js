import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './app/App';
import notesApp from './app/notes/reducers'
import './index.css';
import notesEffects from './app/notes/services/notesEffects'

const sagaMiddleWare = createSagaMiddleware(); 

let store = createStore(notesApp, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(notesEffects);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);