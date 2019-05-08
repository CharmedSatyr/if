import React, { Fragment } from 'react';

const If = props =>
  props.condition ? (
    <Fragment>{props.then || props.children}</Fragment>
  ) : (
    <Fragment>{props.unless || props.else || null}</Fragment>
  );

export default If;
