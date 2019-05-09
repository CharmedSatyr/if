# react-ifs

This package provides a simple conditional logic wrapper for React components. It exports a function component, `If`.

`If` requires a `condition` prop and either child elements or a `then` prop. It accepts optional `else` and `unless` props. It returns a single unmodified prop value based on the combination of props it has received.

The package is intended as a reusable drop-in to clean up repetitive conditional assignments in dynamic React applications.

## Install

```
npm i react-ifs
```

or

```
yarn add react-ifs
```

## Import

```
import If from 'react-ifs';
```

## API

### If/children

```
<If condition={true}>
  <Foo />
</If>
```

`<Foo />` will be returned. If the `condition` evaluates to `false`, `null` will be returned.
\
\
&nbsp;

### If/then

```
<If condition={true} then={<Foo />} />
```

`<Foo />` will be returned. As above, if the `condition` evaluates to `false`, `null` will be returned.
\
\
&nbsp;

### If/then + children → `then` overrides children

```
<If condition={true} then={<Foo />}>
  <Bar />
</If>
```

`<Foo />` will be returned.
\
\
&nbsp;

### If/else

```
<If condition={false} then={<Foo />} else={<Bar />} />
```

`<Bar />` will be returned.
\
\
&nbsp;

### If/else/unless

```
<If condition={false} then={<Foo />} else={<Bar />} unless={<Baz />} />
```

`<Baz />` will be returned if it evaluates to truthy.
\
\
&nbsp;

## Examples

### Login

Either a login form or a logout button is displayed depending on `loggedIn` prop.

```
import React from 'react';
import If from 'react-ifs';

import LoginForm from './login-form';
import LogoutButton from './logout-button';

const Login = props => {
  return (
    <If condition={!props.loggedIn} else={<LogoutButton />}>
      <LoginForm />
    </If>
  );
};

export default Login;
```

&nbsp;

### Access control

The content that renders depends on both `subscribed` and `promotional` props.

```
import React from 'react';
import If from 'react-ifs';

import Demo from './demo';
import MemberContent from './member-content';

const Page = props => {

  const trial = props.promotional ? <MemberContent /> : null;

  return (
    <If
      condition={props.subscribed}
      then={<MemberContent />}
      else={<Demo />}
      unless={trial}
    />
  );
};

export default Page;
```

&nbsp;

### Other conditional displays

One menu renders depending on the `time_of_day` prop.

```
import React from 'react';
import If from 'react-ifs';

import BreakfastMenu from './breakfast-menu';
import LunchMenu from './lunch-menu';
import DinnerMenu from './dinner-menu';

const Menu = props => {
  return (
    <>
      <If condition={props.time_of_day === 'morning'}>
        <BreakfastMenu />
      </If>

      <If condition={props.time_of_day === 'midday'}>
        <LunchMenu />
      </If>

      <If condition={props.time_of_day === 'evening'}>
        <DinnerMenu />
      </If>
    </>
  );
}

export default Menu;
```
