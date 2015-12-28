# metal-examples-custom-build-soy
A simple component using soy templates transpiled to ES5 without preexisting metal tools.

The code is transpiled to ES5 via a custom gulp task that uses [gulp-babel-globals](http://www.npmjs.com/package/gulp-babel-globals), an npm module that builds es6 modules and all their dependencies to a single globals bundle. You can use anything you like on your build though, this is just an example.

Since it's a soy component though, it needs to use Metal.js's custom logic for compiling soy templates so they can be integrated with the appropriate Component class. This example uses [metal-tools-soy](http://www.npmjs.com/package/metal-tools-soy) for this, but it could also use [gulp-metal](http://www.npmjs.com/package/gulp-metal)'s soy task instead.

The code has lots of comments explaining how everything works.

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install global dependencies:

  ```
  [sudo] npm install -g gulp
  ```

3. Install local dependencies:

  ```
  npm install
  bower install
  ```

4. Build the code:

  ```
  gulp build
  ```

5. Open the demo at demos/index.html on your browser.
