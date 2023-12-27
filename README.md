# React-Hook-Scroll

[![npm version](https://img.shields.io/npm/v/react-hook-scroll.svg?style=flat)](https://www.npmjs.com/package/react-hook-scroll)

React-Hook-Scroll is a UI library available for react projects.

You can give the user a choice and let them choose a value through scrolling.

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

List, onItemSelected is required props.
The 'list' is to hand over the array of lists that you want the user to choose.
In 'onItemSelected', you can add a function when the user selects an item.
