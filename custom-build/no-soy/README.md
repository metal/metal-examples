# metal-examples-custom-build-no-soy

A simple code with no soy templates built without any preexisting metal tool.

The code is transpiled to ES5 via a custom gulp task that uses [gulp-babel-globals](http://www.npmjs.com/package/gulp-babel-globals), an npm module that builds es6 modules and all their dependencies to a single globals bundle. You can use anything you like on your build though, this is just an example.

The code has lots of comments explaining how everything works.

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install local dependencies:

  ```sh
  $ npm install
  $ bower install
  ```

4. Build the code:

  ```sh
  $ npm run build
  ```

5. Open the demo at demos/index.html on your browser.
