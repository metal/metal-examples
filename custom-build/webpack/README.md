# metal-examples-custom-build-webpack
A simple component using soy templates and webpack.

Since this example is a soy component, it needs to use Metal.js's custom logic for compiling soy templates so they can be integrated with the appropriate Component class. This example uses [metal-cli](http://www.npmjs.com/package/metal-cli) to compile the templates before bundling the code via webpack.

The webpack command is included in the `build` script, so take a look at package.json to check it out. Note that we're using [babel-loader](http://www.npmjs.com/package/babel-loader) to compile the ES6 code.

The code has lots of comments explaining how everything works.

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install local dependencies:

  ```
  npm install
  ```

3. Build the code:

  ```
  npm run build
  ```

4. Open the demo at demos/index.html on your browser.
