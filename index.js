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
	url = require('url'),
	hasNestedProperty = require('hnp'),
	STATUS_CODES = http.STATUS_CODES;

/**
 * Expose `HTTPError` class
 */

module.exports = HTTPError;


/**
 * Initialize a `HTTPError` object
 * @constructor
 *
 * @param {http.ClientRequest}  request -
 * @param {http.IncomingMessage} response -
 * @param {String} [message] - message prepended in the Error#message property,
 *  default to empty string
 * @inherits {Error}
 *
 * @api public
 */

function HTTPError(req,res,message){
	Error.call(this);
	Error.captureStackTrace(this,arguments.callee);
	this.name = 'HTTPError';

	var description = STATUS_CODES[res.statusCode] || 'Unknown status code';
	req.headers = req.headers || req._headers;
	var reqHeaders = Object.keys(req.headers).map(function(name){
		return name + ': ' + req.headers[name]
	});
	var resHeaders = Object.keys(res.headers).map(function(name){
		return name + ': ' + res.headers[name]
	});

	var protocol = 'http';
	if(hasNestedProperty(req,'socket.pair.ssl')) protocol = 'https';
	if(!req.uri) req.uri =  protocol + '://' + req.headers['host'] + req.path;

	this.message = (message || '') + '\r\n'
		+ 'Request URL: ' + url.format(req.uri || {}) + '\r\n'
		+ 'Request method: ' + req.method + '\r\n'
		+ 'Status code: ' + res.statusCode + ' - ' + description + '\r\n'
		+ 'Request headers: \r\n' + reqHeaders.join('\r\n') + '\r\n'
		+ 'Response headers: \r\n' + resHeaders.join('\r\n')
		+ (res.body ? '\r\nResponse body: \r\n' + res.body : '');
}

util.inherits(HTTPError,Error);