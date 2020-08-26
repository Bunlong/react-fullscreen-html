# react-fullscreen-html

The React component allows its children to enter the browser's fullscreen viewing mode using the Fullscreen HTML5.

[![NPM](https://img.shields.io/npm/v/react-fullscreen-html.svg)](https://www.npmjs.com/package/react-fullscreen-html) [![downloads](https://img.shields.io/npm/dm/react-fullscreen-html.svg?style=flat-square)](https://www.npmjs.com/package/react-fullscreen-html) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-fullscreen-html) [![Build Status](https://api.travis-ci.com/Bunlong/react-fullscreen-html.svg?branch=master)](https://travis-ci.com/Bunlong/react-fullscreen-html) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Compatible with both JavaScript and TypeScript
* Compatible with both Desktop and Mobile browsers
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
```

## 📚 Documentation

### 📖 useFullscreen

### 📖 Fullscreen

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
