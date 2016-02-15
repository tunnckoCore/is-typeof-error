/*!
 * is-typeof-error <https://github.com/tunnckoCore/is-typeof-error>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isError = require('./index')
var KindError = require('kind-error')
var PluginError = require('plugin-error')
var CustomClass = function () {}

test('should return true for `new TypeError()`', function (done) {
  test.strictEqual(isError(new TypeError('test')), true)
  done()
})
test('should return true for `new SyntaxError()`', function (done) {
  test.strictEqual(isError(new SyntaxError('test')), true)
  done()
})
test('should return true for `new KindError()`', function (done) {
  test.strictEqual(isError(new KindError('test')), true)
  done()
})
test('should return true for `new PluginError()`', function (done) {
  test.strictEqual(isError(new PluginError('foo', 'msg')), true)
  done()
})
test('should return false for `new CustomClass()`', function (done) {
  test.strictEqual(isError(new CustomClass()), false)
  done()
})
test('should return false for plain objects', function (done) {
  test.strictEqual(isError({a: 'b'}), false)
  done()
})
test('should return false for objects from ctor', function (done) {
  test.strictEqual(isError(Object.create({a: 'b'})), false)
  done()
})
test('should return false for regexp object', function (done) {
  test.strictEqual(isError(/regex/), false)
  done()
})
