# React-Hook-Scroll &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imb96/react-hook-scroll/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react-hook-scroll.svg?style=flat)](https://www.npmjs.com/package/react-hook-scroll) ![npm downloads](https://img.shields.io/npm/dt/react-hook-scroll)

React-Hook-Scroll is a UI library for React projects that allows users to choose a value through scrolling.<br/>
It is designed to be compatible with both desktop and mobile environments.

### Install

```shell
npm i react-hook-scroll
```

### Example

```jsx
import { useState } from "react";
import { VirtualScroll } from "react-hook-scroll";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <VirtualScroll list={[1, 2, 3, 4, 5]} onItemSelected={setSelected} />
    </div>
  );
}
```

![react-hook-scroll](https://github.com/imb96/react-hook-scroll/assets/71740032/8da48170-0516-4f49-bff8-f23d5fbf8d70)

The VirtualScroll component requires two required profiles.

- list: need a list to let the user choose.
- onItemSelected: The action to be taken with the item selected by the user is required.

### Contributing

Development happens in the open on GitHub and we are grateful for contributions
including bug fixes, improvements, and ideas.

### License

React-Hook-Scroll is [MIT licensed](./LICENSE).
