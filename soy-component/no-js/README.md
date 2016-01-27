# metal-examples-no-js

A simple modal component built with soy templates and without any custom js code.

This example shows that having just a soy file is enough if you just need your component to be rendered and update itself when state changes. To see how to add more behavior to a component through a js file, check [metal-examples-simple](https://github.com/mairatma/metal-examples/tree/master/soy-component/simple).

The code has lots of comments explaining how everything works.

This example was created using [generator-metal](https://www.npmjs.com/package/generator-metal) for the boilerplate. Auto-generated gulp tasks are used for building/testing and other processes, since **generator-metal** uses [gulp-metal](https://www.npmjs.com/package/gulp-metal) automatically.

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install global dependencies:

  ```
  [sudo] npm install -g gulp
  ```

3. Install local dependencies:

  ```
  npm install
  ```

4. Build the code:

  ```
  gulp build
  ```

5. Open the demo at demos/index.html on your browser.
