import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';


import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/src/styles/index.scss'

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.register();
