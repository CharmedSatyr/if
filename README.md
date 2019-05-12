# react-ifs

[![NPM](https://nodei.co/npm/react-ifs.png)](https://nodei.co/npm/react-ifs/)

[![Build Status](https://travis-ci.com/CharmedSatyr/react-ifs.svg?branch=master)](https://travis-ci.com/CharmedSatyr/react-ifs) [![Coverage Status](https://coveralls.io/repos/github/CharmedSatyr/react-ifs/badge.svg?branch=master)](https://coveralls.io/github/CharmedSatyr/react-ifs?branch=master) [![dependencies](https://david-dm.org/charmedsatyr/react-ifs.png)](https://david-dm.org/charmedsatyr/react-ifs.svg) [![Known Vulnerabilities](https://snyk.io/test/github/charmedsatyr/react-ifs/badge.svg)](https://snyk.io/test/github/charmedsatyr/react-ifs) [![GitHub issues](https://img.shields.io/github/issues/charmedsatyr/react-ifs.svg)](https://github.com/CharmedSatyr/react-ifs/issues) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Keybase PGP](https://img.shields.io/keybase/pgp/charmedsatyr.svg)](https://keybase.io/charmedsatyr)

This package provides a simple conditional logic wrapper for React components. It exports a function component, `If`.

`If` requires a `condition` prop and either child elements or a `then` prop. It accepts optional `else` and `unless` props. It returns a single, unmodified prop value based on the combination of props it has received.

The package is intended as a reusable drop-in to clean up repetitive conditional assignments in dynamic React applications.

&nbsp;

## Install

```bash
npm i react-ifs
```

or

```bash
yarn add react-ifs
```

&nbsp;

## Import

```javascript
import If from 'react-ifs';
```

&nbsp;

## API

### If/children

```javascript
<If condition={true}>
  <Foo />
</If>
```

`<Foo />` will be returned. If the `condition` evaluates to `false`, `null` will be returned. If the condition evaluates to false, `null` will be returned.

&nbsp;

### If/then

```javascript
<If condition={true} then={<Foo />} />
```

`<Foo />` will be returned. As above, if the `condition` evaluates to `false`, `null` will be returned.

&nbsp;

### If/then + children → `then` overrides children

```javascript
<If condition={true} then={<Foo />}>
  <Bar />
</If>
```

`<Foo />` will be returned.

&nbsp;

### If/else

```javascript
<If condition={false} then={<Foo />} else={<Bar />} />
```

`<Bar />` will be returned.

&nbsp;

### If/else/unless

```javascript
<If condition={false} then={<Foo />} else={<Bar />} unless={<Baz />} />
```

`<Baz />` will be returned if it evaluates to truthy.

&nbsp;

## Examples

### Login

Either a login form or a logout button is displayed depending on the `loggedIn` prop.

```javascript
import React from 'react';
import If from 'react-ifs';

import LoginForm from './login-form';
import LogoutButton from './logout-button';

const Login = props => (
  <If condition={!props.loggedIn} else={<LogoutButton />}>
    <LoginForm />
  </If>
);

export default Login;
```

&nbsp;

### Access control

The content that renders depends on both `subscribed` and `promotional` props.

```javascript
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

```javascript
import React from 'react';
import If from 'react-ifs';

import BreakfastMenu from './breakfast-menu';
import LunchMenu from './lunch-menu';
import DinnerMenu from './dinner-menu';

const Menu = props => (
  <>
    <If condition={props.time_of_day === 'morning'} then={<BreakfastMenu />} />

    <If condition={props.time_of_day === 'midday'} then={<LunchMenu />} />

    <If condition={props.time_of_day === 'evening'} then={<DinnerMenu />} />
  </>
);

export default Menu;
```
