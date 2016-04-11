# tld-list
 
> A list of all valid top-level domains and is updated from time to time.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/tld-list/blob/master/LICENSE)
[![build:?](https://img.shields.io/travis/bubkoo/tld-list/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/tld-list)

A list of all valid top-level domains is maintained by the [IANA](http://www.iana.org/) and is updated from time to time.

Click [here](http://data.iana.org/TLD/tlds-alpha-by-domain.txt) to view the list.


## Install

```
$ npm install --save tld-list 
```

## Usage

```js
var tlds = require('tld-list');

console.log(tlds);
```

## Related

- [random-tld](https://github.com/bubkoo/random-tld) - Return a random tld.
- [pick-some](https://github.com/bubkoo/pick-some) - Randomly sampling some item(s) from an array(array like object).
