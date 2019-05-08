import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const If = props => props.condition ? React.createElement(Fragment, null, props.then || props.children) : React.createElement(Fragment, null, props.unless || props.else || null);

ReactDOM.render(React.createElement(If, null), document.getElementById('root'));
