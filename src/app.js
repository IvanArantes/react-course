import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//import css
import './styles/styles.scss';

//cross browser support
import 'normalize.css/normalize.css'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
