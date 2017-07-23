React Toolbox is a set of [React](http://facebook.github.io/react/) components that implement [Google's Material Design specification](https://material.google.com/). It's powered by [CSS Modules](https://github.com/css-modules/css-modules) and harmoniously integrates with your [webpack](http://webpack.github.io/) workflow, although you can use any other module bundler. You can take a tour through our documentation website and try the components live!

## Installation

React Toolbox can be installed as an [npm package](https://www.npmjs.org/package/react-toolbox):

```bash
$ npm install --save react-toolbox
```

## Prerequisites

React Toolbox uses [CSS Modules](https://github.com/css-modules/css-modules) by default to import stylesheets written in [SASS](http://sass-lang.com/). In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.

Although we recommend [webpack](https://webpack.github.io/), you are free to use whatever module bundler you want as long as it can compile and require SASS files located in your `node_modules`. If you are experiencing require errors, make sure your configuration satisfies this requirement.

Of course this is a set of React components so you should be familiar with [React](https://facebook.github.io/react/). If want to customize your components via themes, you may want to take a look to [react-css-themr](https://github.com/javivelasco/react-css-themr) which is used by React Toolbox to make component easily themeable.
