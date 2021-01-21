import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './store/users';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({ users: usersSlice.reducer, user: usersSlice.reducer })
const store = configureStore({
  reducer: rootReducer
});

export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
