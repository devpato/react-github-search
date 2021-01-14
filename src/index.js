import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './store/search';
import dataSlice from './store/data';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({ search: searchSlice.reducer, data: dataSlice })
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
