import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  // <BooksContext.Provider value = {value to be passed}> is replaced by Provider function
  <Provider> 
    <App />
  </Provider>
  // </BooksContext.Provider>
);
