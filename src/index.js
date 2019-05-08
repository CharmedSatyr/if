import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const If = props =>
  props.condition ? (
    <Fragment>{props.then || props.children}</Fragment>
  ) : (
    <Fragment>{props.unless || props.else || null}</Fragment>
  );

ReactDOM.render(<If />, document.getElementById('root'));
