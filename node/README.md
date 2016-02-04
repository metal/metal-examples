# metal-examples-uri

A module that parses URIs and works both in the browser and on node.

To have a metal module work on node, it's only necessary to update package.json accordingly. In this example there's a **prepublish** script in that file that compiles the src code to be node-compatible and puts them in the **lib** folder. It also defines the entry points for both the browser version and the node version of the code. That way, when other modules want to use **metal-examples-uri**, they can just do `var Uri = require('metal-examples-uri')` or `import Uri from 'metal-examples-uri'`, and the appropriate file will be loaded.

The code has lots of comments explaining how everything works.

This example was created using [generator-metal](https://www.npmjs.com/package/generator-metal) for the boilerplate, including package.json setup for the node environment. Auto-generated gulp tasks are used for building/testing and other processes, since **generator-metal** uses [gulp-metal](https://www.npmjs.com/package/gulp-metal) automatically.

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
