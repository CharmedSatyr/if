# react-ifs

This package provides a simple conditional logic wrapper for React components. It has a single default export, an `If` component.

`If` accepts child elements and `then`, `else`, and `unless` props and returns a value based on its `condition` prop.

## API

### Installation

`npm i react-ifs` or `yarn add react-ifs`

&nbsp;

### Import to your React project

```
import React from 'react';
import If from 'react-ifs';
```

&nbsp;

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

### If/then (`then` overrides children)

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

`<Baz />` will be returned.
\
\
&nbsp;

## Example Use Case

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
