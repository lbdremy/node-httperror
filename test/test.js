/**
 * Module dependencies
 */

var test = require('tap').test,
	STATUS_CODES = require('http').STATUS_CODES,
	HTTPError = require('./../');

/**
 * Test suite - redo it with new API
 */

// test('new HTTPError(404)',function(t){
// 	var code = 404;
// 	var err = new HTTPError(code);
// 	t.equal(err.name,'HTTPError');
// 	t.equal(err.message, code + ' - ' + STATUS_CODES[code]);
// 	t.ok(err.stack);
// 	t.end();
// });

// test('new HTTPError(800) // 800 is an example of an unknown status code',function(t){
// 	var code = 800;
// 	var err = new HTTPError(code);
// 	t.equal(err.name,'HTTPError');
// 	t.equal(err.message, code + ' - Unknown status code');
// 	t.ok(err.stack);
// 	t.end();
// });

// test('new HTTPError() // invalid status code',function(t){
// 	var code;
// 	var err = new HTTPError(code);
// 	t.equal(err.name,'HTTPError');
// 	t.equal(err.message,'undefined - Unknown status code');
// 	t.ok(err.stack);
// 	t.end();
// });

// test('new HTTPError("500") // accepts String',function(t){
// 	var code = '500';
// 	var err = new HTTPError(code);
// 	t.equal(err.name,'HTTPError');
// 	t.equal(err.message, code + ' - ' + STATUS_CODES[code]);
// 	t.ok(err.stack);
// 	t.end();
// });