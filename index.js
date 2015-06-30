/*!
 * is-typeof-error <https://github.com/tunnckoCore/is-typeof-error>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('isobject')

module.exports = function isError (val) {
  return isObject(val) &&
    val instanceof Error &&
    typeof val.message === 'string' &&
    String(val).indexOf('Error') !== -1
}
