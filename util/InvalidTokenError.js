
"use strict";

//Utils module loaded
var util = require('util');

/**gra
 * Error Class ValueOutOfRangeError
 * */
function InvalidTokenError() {

    /*INHERITANCE*/
    Error.call(this); //super constructor
    Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in util object

    //Set the name for the ERROR
    this.name = this.constructor.name; //set our function’s name as util name.

    //Define util message
    this.message = [
        "Error  :", "Tampered token or invalid key."
    ].join(" "); //Concat and make a string.
}

// inherit from Error
util.inherits(InvalidTokenError, Error);

//Export the constructor function as the export of this module file.
module.exports = InvalidTokenError;
