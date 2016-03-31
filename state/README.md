# metal-examples-state

A simple class that has no rendering logic.

Classes that are not meant to be renderable components should not extend from `Component`. They can extend from `State` though, and so take advantage of all the state features that components have.

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
