import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './component/movieList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Fragment>
 <MovieList byType="all" title="week trends ALL" byTime="week"/>
 <MovieList byType="tv" title="week trends MOVIE" byTime="week"/>
 <MovieList byType="movie" title="week trends TYPE" byTime="week"/>
 <MovieList byType="person" title="week trends PERSON" byTime="week"/>
 <MovieList byType="all" title=" day trends ALL " byTime="day"/>
 <MovieList byType="tv" title=" day trends MOVIE" byTime="day"/>
 <MovieList byType="movie" title="day trends TYPE" byTime="day"/>
 <MovieList byType="person" title="day trends PERSON" byTime="day"/>
 </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
