import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import All from './component/all'
import Movie from './component/movie';
import Tv from './component/tv';
import Person from './component/person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Fragment>
  <All></All>
  <Movie></Movie>
  <Tv></Tv>
  <Person></Person>
 </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
