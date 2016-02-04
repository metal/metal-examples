'use strict';

// This file will be used automatically by node when 'metal-examples-uri' is
// required.

var url = require('url');
var Uri = require('./lib/Uri').default;

Uri.setParseFn(url.parse);

module.exports = Uri;
