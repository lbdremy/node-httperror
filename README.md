# HTTPError - HTTPError class for node.js

## Install

```sh
npm install HTTPError
```

## Usage

```js
var HTTPError = require('HTTPError'),
	http = require('http');

http.get('http://google.com',function(err,res){
	if(err) return console.error(err);
	if(res.statusCode !== 200) return console.error(new HTTPError(res.statusCode));
	res.on('end',function(){
		console.log('end');
	});
});
```

__N.B:__ This constructor does not make any difference between the _"good or evil"_ status code.
In the case you give a status code like `200`, the `HTTPError` object will be created without troubles but you will end up
with that:

```js

var HTTPError = require('./../');

var err = new HTTPError(200);
throw err;

// will give you
// HTTPError: 200 - OK
//    at Object.<anonymous> (/home/lbdremy/workspace/nodejs/HTTPError/example/internal-server-error.js:3:11)
//    at Module._compile (module.js:449:26)
//    at Object.Module._extensions..js (module.js:467:10)
//    at Module.load (module.js:356:32)
//    at Function.Module._load (module.js:312:12)
//    at Module.runMain (module.js:492:10)
//    at process.startup.processNextTick.process._tickCallback (node.js:244:9)

```

## Test

```sh
npm test
```

## Licence

(The MIT License)

Copyright 2013 Rémy Loubradou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.