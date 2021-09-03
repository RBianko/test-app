import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './components/redux/store/loginStore';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);