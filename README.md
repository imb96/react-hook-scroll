# React-Hook-Scroll &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imb96/react-hook-scroll/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react-hook-scroll.svg?style=flat)](https://www.npmjs.com/package/react-hook-scroll) ![npm downloads](https://img.shields.io/npm/dt/react-hook-scroll)

React-Hook-Scroll" is a scroll UI library that can be used in React projects.<br/>
It is designed to be compatible with both desktop and mobile environments.

### Install

```shell
npm install react-hook-scroll
```

OR

```shell
yarn add react-hook-scroll
```

### Example

### 1. VirtualScroll

```jsx
import { useState } from "react";
import { VirtualScroll } from "react-hook-scroll";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <VirtualScroll list={[1, 2, 3, 4, 5]} onItemSelected={setSelected} />
    </>
  );
}
```

![react-hook-scroll](https://github.com/imb96/react-hook-scroll/assets/71740032/8da48170-0516-4f49-bff8-f23d5fbf8d70)<br/>
The VirtualScroll component requires two required profiles.

- list: need a list to let the user choose.
- onItemSelected: The action to be taken with the item selected by the user is required.<br/>

### 2. ScrollToTop

```jsx
import { ScrollToTop } from "react-hook-scroll";

return (
  <>
    <ScrollToTop>
      <SVG />
    </ScrollToTop>
  </>
);
```

![ScrollToTop](https://github.com/imb96/react-hook-scroll/assets/71740032/00358d9a-eeaf-4eac-a3fd-617fa27c92b9)

### Contributing

Development happens in the open on GitHub and we are grateful for contributions
including bug fixes, improvements, and ideas.

### License

React-Hook-Scroll is [MIT licensed](./LICENSE).
