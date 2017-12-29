[![Build Status](https://secure.travis-ci.org/MorganConrad/metalsmith-functional.png)](http://travis-ci.org/MorganConrad/metalsmith-functional)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/metalsmith-functional)
[![NPM Downloads](http://img.shields.io/npm/dm/metalsmith-functional.svg)](https://www.npmjs.org/package/metalsmith-functional)
[![Known Vulnerabilities](https://snyk.io/test/github/morganconrad/metalsmith-functional/badge.svg)](https://snyk.io/test/github/morganconrad/metalsmith-functional)
[![Coverage Status](https://coveralls.io/repos/github/MorganConrad/metalsmith-functional/badge.svg)](https://coveralls.io/github/MorganConrad/metalsmith-functional)

# metalsmith-functional
Creates ("selects") a temporary subset of Metalsmith's filedata, on which you can use plugins.  Then call `done()` to return to normal flow with all files.  Useful if your plugins are very long, expensive, or conflicting.

Inspired by [This feature request](https://github.com/segmentio/metalsmith/issues/287)

**Warning**: If the plugins add or remove "files", **this wil not work**.  It does work if they modify existing files, metalsmith, etc...

Functional Programmers might think of this as "`filter().forEach()`", but, unlike modules like [metalsmith-filter](https://www.npmjs.com/package/metalsmith-filter) it does not permanently change the original files object.

Procedural Programmers could think of this as "`if/then/else`": for all files, if they pass the selection criteria, then use the plugins.

```
const functional = require('metalsmith-functional');
  ...
.use(functional(options))           // select a subset of files
  
```

### options

Due to the special nature of this plugin, Javascript only, no CLI. (???)  


### Examples

Only pass files with a field "usePrismJS" to metalsmith-prism

```
use(select({ usePrismJS: true })
  .thenUse(metalsmithPrism())
```
