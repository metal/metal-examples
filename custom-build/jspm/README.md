# metal-examples-custom-build-jspm
A simple component using soy templates and JSPM.

Since this example is a soy component, it needs to use Metal.js's custom logic for compiling soy templates so they can be integrated with the appropriate Component class. This example uses [metal-cli](npmjs.com/package/metal-cli) to compile the templates before bundling the code via JSPM.

The code has lots of comments explaining how everything works.

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install local dependencies:

  ```
  npm install
  bower install
  ```

3. Build the code:

  ```
  npm run build
  ```

4. Open the demo at demos/index.html on your browser.
