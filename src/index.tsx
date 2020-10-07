import { jsx } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import './styles/index.scss';
ReactDOM.render(
  <React.StrictMode>
    <App name="nikhil" />
  </React.StrictMode>,
  document.getElementById('root')
);
