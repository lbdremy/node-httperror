var HTTPError = require('./../');

var err = new HTTPError(500);
throw err;

// console.error(err);
// console.log(err.stack); // here is the stack