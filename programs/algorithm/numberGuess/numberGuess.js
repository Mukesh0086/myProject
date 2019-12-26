let refer = require("../../utility/utility");
var readlineSync = require('readline-sync');

var number = readlineSync.question("enter The number:");

refer.numberGuess(number);