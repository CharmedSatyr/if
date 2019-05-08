### react-ifs

This package provides a simple conditional logic wrapper for React components.

It accepts `condition`, `then`, `else`, and `unless` props as well as child elements.

Import to your React project:

```
import React from 'react';
import If from 'react-ifs';
```

#### Example 0: If/children

```
<If condition={true}>
  Content!
</If>
```

`Content!` will be displayed.

#### Example 1: If/then

```
<If condition={true} then={'Override children'}>
  Content!
</If>
```

`Override children` will be displayed.

#### Example 2: If/else

```
<If condition={false} else={'fallback'}>
  Content!
</If>
```

`fallback` will be displayed.

#### Example 3: If/else/unless

```
<If condition={false}
  then={'Override children'}
  else={'fallback'}
  unless={"I'm here"}
>
  Content!
</If>
```

`I'm here` will be displayed.
