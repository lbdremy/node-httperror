var HTTPError = require('./../');

var err = new HTTPError(404);
throw err;

// console.error(err);
// console.log(err.stack); // here is the stack