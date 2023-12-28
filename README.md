# React-Hook-Scroll

[![npm version](https://img.shields.io/npm/v/react-hook-scroll.svg?style=flat)](https://www.npmjs.com/package/react-hook-scroll)

React-Hook-Scroll is a UI library for React projects that allows users to choose a value through scrolling. It is designed to be compatible with both desktop and mobile environments.

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

![스크린샷 2023-12-27 오후 6 32 46](https://github.com/imb96/git-recipe/assets/71740032/4084c2a9-6d57-4631-a478-3b3cfc43d436)

The VirtualScroll component requires two required profiles.

- list: need a list to let the user choose.
- onItemSelected: The action to be taken with the item selected by the user is required.

### Contributing

Development happens in the open on GitHub and we are grateful for contributions
including bug fixes, improvements, and ideas.

### License

React-Hook-Scroll is [MIT licensed](./LICENSE).
