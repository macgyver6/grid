import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux-modules/index';
import FormComponent from './components/layout/Form';
import LayoutRoot from './components/layout/LayoutRoot';
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const backgroundPanelStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: window.screen.availWidth * 0.98,
  // height: window.screen.availHeight * 0.89,
  backgroundColor: 'white',
};
export const middlePanelStyle = {
  width: '50%',
  height: '100%',
  backgroundColor: 'white',
  margin: '20px 20px',
};

ReactDOM.render(
  <Provider store={store}>
    <LayoutRoot />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
