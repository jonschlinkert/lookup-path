/*!
 * lookup-path <https://github.com/jonschlinkert/lookup-path>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var lookup = require('..');


describe('lookup', function () {

  it('should lookup path', function () {
    var actual = lookup('package.json');
    (typeof actual === 'string').should.be.true;
  });

  it('should lookup path from the cwd', function () {
    var actual = lookup('package.json', {cwd: process.cwd()});
    (typeof actual === 'string').should.be.true;
  });

  it('should lookup path from the cwd', function () {
    var actual = lookup('test.js', {cwd: 'test'});
    (typeof actual === 'string').should.be.true;
  });
});