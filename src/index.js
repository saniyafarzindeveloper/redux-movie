import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import movies from './reducer';

//creating store
//store is just an object with some properties
const store = createStore(movies)

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{}]
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



