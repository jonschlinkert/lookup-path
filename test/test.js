'use strict';

require('mocha');
var assert = require('assert');
var lookup = require('..');

describe('lookup', function() {
  it('should lookup path', function() {
    var actual = lookup('package.json');
    assert.equal(typeof actual, 'string');
  });

  it('should lookup path from the cwd', function() {
    var actual = lookup('package.json', process.cwd());
    assert.equal(typeof actual, 'string');
  });

  it('should lookup path from the cwd', function() {
    var actual = lookup('test.js', 'test');
    assert.equal(typeof actual, 'string');
  });

  it('should return `null` when a path is not found.', function() {
    var actual = lookup('tesksksks.js');
    assert.equal(actual, null);
  });
});
