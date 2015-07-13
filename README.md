# [is-typeof-error][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given value is any type of error and instanceof Error

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][cov-img]][cov-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-typeof-error --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isError = require('is-typeof-error')
var KindError = require('kind-error')
var PluginError = require('plugin-error')

var CustomClass = function () {}
CustomClass.prototype.foo = function () {}

isError(new TypeError('test')) //=> true
isError(new SyntaxError('test')) //=> true
isError(new SyntaxError('test')) //=> true
isError(new PluginError('test', 'msg')) //=> true
isError(new CustomClass('test')) //=> false
isError(new Object({a: 'b'})) //=> false
isError(new RegExp('test')) //=> false
isError(Object.create({a: 'b'})) //=> false
isError(/regex/) //=> false
isError({a: 'b'}) //=> false
```


## Related
- [is-kindof](https://github.com/tunnckocore/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [kind-error](https://github.com/tunnckocore/kind-error): Correct inheriting from `Error`. Supports constructing from an object of properties - focused on assertion.
- [kind-of-extra](https://github.com/tunnckocore/kind-of-extra): Extends `kind-of` type check utility with support for promises, generators, streams and errors. Like `kindof(Promise.resolve(1)) === 'promise'` and etc.
- [kind-of-types](https://github.com/tunnckocore/kind-of-types): List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc.

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-typeof-error/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-typeof-error
[npmjs-img]: https://img.shields.io/npm/v/is-typeof-error.svg?label=is-typeof-error

[license-url]: https://github.com/tunnckoCore/is-typeof-error/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-typeof-error
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-typeof-error.svg

[cov-url]: https://codeclimate.com/github/tunnckoCore/is-typeof-error
[cov-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/is-typeof-error.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-typeof-error
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-typeof-error.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-typeof-error
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-typeof-error.svg

[david-url]: https://david-dm.org/tunnckoCore/is-typeof-error
[david-img]: https://img.shields.io/david/tunnckoCore/is-typeof-error.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
