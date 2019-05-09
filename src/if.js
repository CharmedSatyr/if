import React, { Fragment } from 'react';

const If = props => {
  if (!!props.condition) {
    if (!!props.then) {
      return <Fragment>{props.then}</Fragment>;
    } else if (!!props.children) {
      return <Fragment>{props.children}</Fragment>;
    }
  } else {
    if (!!props.unless) {
      return <Fragment>{props.unless}</Fragment>;
    } else if (!!props.else) {
      return <Fragment>{props.else}</Fragment>;
    }
  }
  return null;
};

export default If;
