import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux' 
import AnecdoteReducer from './Reducers/AnecdoteReducer';

const store = createStore(AnecdoteReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


