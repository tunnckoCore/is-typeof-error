/*!
 * is-typeof-error <https://github.com/tunnckoCore/is-typeof-error>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('is-extendable')

/**
 * > Check that `val` is error.
 *
 * **Example**
 *
 * ```js
 * const isTypeofError = require('is-typeof-error')
 * const PluginError = require('plugin-error')
 * const KindError = require('kind-error')
 *
 * const CustomClass = function () {}
 * CustomClass.prototype.foo = function () {}
 *
 * isTypeofError(new TypeError('test'))           // => true
 * isTypeofError(new KindError('test'))           // => true
 * isTypeofError(new SyntaxError('test'))         // => true
 * isTypeofError(new PluginError('test', 'msg'))  // => true
 *
 * isTypeofError(new CustomClass('test'))         // => false
 * isTypeofError(new Object({a: 'b'}))            // => false
 * isTypeofError(new RegExp('test'))              // => false
 * isTypeofError(Object.create({a: 'b'}))         // => false
 * isTypeofError(/regex/)                         // => false
 * isTypeofError({a: 'b'})                        // => false
 * ```
 *
 * @param  {Error} `val`
 * @return {Boolean}
 * @api public
 */

module.exports = function isTypeofError (val) {
  return isObject(val) &&
    val instanceof Error &&
    typeof val.message === 'string'
}
