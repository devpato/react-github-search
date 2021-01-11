import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './store/search';
import { usersSlice } from './store/users';

const rootReducer = combineReducers({ search: searchSlice.reducer, users: usersSlice.reducer })
const store = configureStore({
  reducer: rootReducer
});


//Testing action
// const {searchUsers} = searchSlice.actions;

// store.dispatch(searchUsers());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
