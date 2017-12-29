[![Build Status](https://secure.travis-ci.org/MorganConrad/metalsmith-functional.png)](http://travis-ci.org/MorganConrad/metalsmith-functional)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/metalsmith-functional)
[![NPM Downloads](http://img.shields.io/npm/dm/metalsmith-functional.svg)](https://www.npmjs.org/package/metalsmith-functional)
[![Known Vulnerabilities](https://snyk.io/test/github/morganconrad/metalsmith-functional/badge.svg)](https://snyk.io/test/github/morganconrad/metalsmith-functional)
[![Coverage Status](https://coveralls.io/repos/github/MorganConrad/metalsmith-functional/badge.svg)](https://coveralls.io/github/MorganConrad/metalsmith-functional)

# metalsmith-functional

Inspired by [This feature request](https://github.com/segmentio/metalsmith/issues/287)

Most metalsmith plugins directly modify the `files` object.  There is a growing trend towards "functional style" or immutable code, which **returns** a new version of the object instead of modifying it.  Until metalsmith supports this style, you can try using this plugin.

```
const functional = require('metalsmith-functional');
  ...
.use(functional(fn [,options]))
  
```

### fn - your function, of the form `fn(files, metalsmith [,callback(err, results)])`
 - return (or callback with) either an Object or an Array (see options.id)
 - if there is an err `files` will remain unchanged

### options

 - options.retain   Do not delete existing key/value pairs in files.  (default = false)
 - options.id       if fn returns an array, which key to use for the filename is files  
