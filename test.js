/*!
 * is-typeof-error <https://github.com/tunnckoCore/is-typeof-error>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isError = require('./index')
var KindError = require('kind-error')
var PluginError = require('plugin-error')
var CustomClass = function () {}

test('is-typeof-error:', function () {
  test('should return true for `new TypeError()`', function (done) {
    var actual = isError(new TypeError('test'))
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should return true for `new SyntaxError()`', function (done) {
    var actual = isError(new SyntaxError('test'))
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should return true for `new KindError()`', function (done) {
    var actual = isError(new KindError('test'))
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should return true for `new PluginError()`', function (done) {
    var actual = isError(new PluginError('foo', 'msg'))
    var expected = true

    test.equal(actual, expected)
    done()
  })
  test('should return false for `new CustomClass()`', function (done) {
    var actual = isError(new CustomClass())
    var expected = false

    test.equal(actual, expected)
    done()
  })
  test('should return false for plain objects', function (done) {
    var actual = isError({a: 'b'})
    var expected = false

    test.equal(actual, expected)
    done()
  })
  test('should return false for objects from ctor', function (done) {
    var actual = isError(Object.create({a: 'b'}))
    var expected = false

    test.equal(actual, expected)
    done()
  })
  test('should return false for regexp object', function (done) {
    var actual = isError(/regex/)
    var expected = false

    test.equal(actual, expected)
    done()
  })
})
