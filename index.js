/*!
 * HTTPError
 * Copyright(c) 2013 Rémy Loubradou
 * Author Rémy Loubradou <remyloubradou@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

var http = require('http'),
	util = require('util'),
	STATUS_CODES = http.STATUS_CODES;

/**
 * Expose `HTTPError` class
 */

module.exports = HTTPError;


/**
 * Initialize a `HTTPError` object
 *
 * @param {Number|String} code - HTTP status code
 *
 * @constructor
 * @extends {Error}
 *
 * @api public
 */

function HTTPError(code){
	Error.call(this);
	Error.captureStackTrace(this,arguments.callee);
	this.name = 'HTTPError';
	var description = STATUS_CODES[code] || 'Unknown status code';
	this.message = code + ' - ' + description;
}

util.inherits(HTTPError,Error);