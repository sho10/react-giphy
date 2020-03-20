import '../assets/stylesheets/application.scss';
// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);
