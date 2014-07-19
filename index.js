/*!
 * lookup-path <https://github.com/jonschlinkert/lookup-path>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var isAbsolute = require('is-absolute');
var normalizePath = require('normalize-path');


/**
 * **Example:**
 *
 * ```js
 * var lookup = require('lookup-path');
 * var file = lookup('package.json');
 * ```
 *
 * @param  {String} `filepath`
 * @param  {Object} `options`
 * @return {String}
 */

module.exports = function lookup(filepath, options) {
  options = options || {};

  if (typeof filepath !== 'string') {
    // do your own validation for non-strings
    return filepath;
  }

  var cwd = options.cwd || process.cwd();
  if (isAbsolute(filepath)) {
    return normalizePath(filepath);
  } else if (fs.existsSync(path.join(cwd, filepath))) {
    return normalizePath(path.join(cwd, filepath));
  } else if (fs.existsSync(path.resolve(cwd, filepath))) {
    return normalizePath(path.resolve(cwd, filepath));
  } else {
    throw new Error('lookup-path cannot find: ' + path.join(cwd, filepath));
  }
};
