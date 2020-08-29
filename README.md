# react-fullscreen-html

The React component allows its children to enter the browser's fullscreen viewing mode using the Fullscreen HTML5.

[![NPM](https://img.shields.io/npm/v/react-fullscreen-html.svg)](https://www.npmjs.com/package/react-fullscreen-html) [![downloads](https://img.shields.io/npm/dm/react-fullscreen-html.svg?style=flat-square)](https://www.npmjs.com/package/react-fullscreen-html) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-fullscreen-html) [![Build Status](https://api.travis-ci.com/Bunlong/react-fullscreen-html.svg?branch=master)](https://travis-ci.com/Bunlong/react-fullscreen-html) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Compatible with both JavaScript and TypeScript
* Compatible with both Desktop and Mobile browsers
* Compatible with all browsers
* No dependency
* Easy to use

## 🔧 Install

react-fullscreen-html is available on npm. It can be installed with the following command:

```
npm install react-fullscreen-html --save
```

react-fullscreen-html is available on yarn as well. It can be installed with the following command:

```
yarn add react-fullscreen-html
```

## 💡 Usage

### 🎀 Basic

```jsx
import React from 'react';
import { Fullscreen, useFullscreen } from "react-fullscreen-html";

function App() {
  const screen = useFullscreen();

  return (
    <div>
      <button onClick={screen.enter}>
        Enter fullscreen
      </button>

      <Fullscreen handle={screen}>
        Any fullscreen content here
      </Fullscreen>
    </div>
  );
}

export default App;
```

### 🎀 Advanced

```jsx
import React, {useCallback} from 'react';
import { Fullscreen, useFullscreen } from "react-fullscreen-html";

function App() {
  const screen1 = useFullscreen();
  const screen2 = useFullscreen();

  const reportChange = useCallback((state, handle) => {
    if (handle === screen1) {
      console.log('Screen 1 went to', state, handle);
    }
    if (handle === screen2) {
      console.log('Screen 2 went to', state, handle);
    }
  }, [screen1, screen2]);
  
  return (
    <div>
      <button onClick={screen1.enter}>
        First
      </button>

      <button onClick={screen2.enter}>
        Second
      </button>

      <Fullscreen handle={screen1} onChange={reportChange}>
        <div className="full-screenable-node" style={{background: "red"}}>
          First
          <button onClick={screen1.exit}>
            Exit
          </button>
        </div>
      </Fullscreen>

      <Fullscreen handle={screen2} onChange={reportChange}>
        <div className="full-screenable-node" style={{background: "green"}}>
          Second
          <button onClick={screen2.exit}>
            Exit
          </button>
        </div>
      </Fullscreen>
    </div>
  );
};

export default App;
```

## 📚 Documentation

### 📖 useFullscreen

<table>
  <thead>
    <tr>
      <th>Returned</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>active</td>
      <td>boolean</td>
      <td>true if this element is currently full screen.</td>
    </tr>
    <tr>
      <td>enter</td>
      <td>() => void</td>
      <td>Requests this element to go full screen.</td>
    </tr>
    <tr>
      <td>exit</td>
      <td>>() => void</td>
      <td>Requests this element to exit full screen.</td>
    </tr>
  </tbody>
</table>

### 📖 Fullscreen

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>handle</td>
      <td>UseFullscreenProps</td>
      <td>✔️</td>
      <td>Handle that helps operate the full screen state.</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>(state: boolean, handle: FullscreenHandle) => void</td>
      <td>❌</td>
      <td>Optional callback that gets called when this screen changes state.</td>
    </tr>
  </tbody>
</table>

## 💖 Wrap Up

If you think any of the `react-fullscreen-html` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `react-fullscreen-html` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
