import React, { Fragment } from 'react';

const If = props =>
  props.condition
    ? React.createElement(Fragment, null, props.then || props.children)
    : React.createElement(Fragment, null, props.unless || props.else || null);

export default If;
