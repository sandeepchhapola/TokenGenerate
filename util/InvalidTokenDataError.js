
"use strict";

//Utils module loaded
var util = require('util');

/**gra
 * Error Class ValueOutOfRangeError
 * */
function InvalidTokenDataError(tokenDataObj) {

    /*INHERITANCE*/
    Error.call(this); //super constructor
    Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in util object

    //Set the name for the ERROR
    this.name = this.constructor.name; //set our function’s name as util name.

    //Define util message
    this.message = [
        "userId type  :", typeof tokenDataObj.userId,
        "scope type  :", typeof tokenDataObj.scope,
        "token has been expired :", tokenDataObj.expiry
    ].join(" "); //Concat and make a string.
}

// inherit from Error
util.inherits(InvalidTokenDataError, Error);

//Export the constructor function as the export of this module file.
module.exports = InvalidTokenDataError;
