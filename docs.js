module.exports = [{"title":"cvn","since":"v2.0.0","syntax":"cvn(cvnCode)","usage":{"commonjs":{"title":"CommonJs","code":"const cvn = require('simple-card/cvn');"},"standard":{"title":"Standard","code":"import cvn from 'simple-card/cvn';"},"browser":{"title":"Browser","code":"<script src=\"path/to/simple-card/cvn/index.js\"></script>"}},"desc":"Validates that the string cvn passed in is a valid cvn number","examples":["cvn('333'); // => { isValid: true, info: 'norm' }\rcvn('3333'); // => { isValid: true, info: 'amex' }\rcvn('33433'); // => { isValid: false, info: 'Invalid CVN Code' }"],"params":[{"type":{"names":["String","Number"]},"description":"The string cvn we want to validate","name":"cvnCode"}],"returns":[{"type":{"names":["Object"]},"description":"An object containing a isValid boolean and some info"}]},{"title":"expired","since":"v2.0.0","syntax":"expired(date)","usage":{"commonjs":{"title":"CommonJs","code":"const expired = require('simple-card/expired');"},"standard":{"title":"Standard","code":"import expired from 'simple-card/expired';"},"browser":{"title":"Browser","code":"<script src=\"path/to/simple-card/expired/index.js\"></script>"}},"desc":"Validates that the string date passed in is indeed a valid date and not an old one","examples":["expired('04/20'); // => { isValid: true, info: 'Not Expired' }\rexpired('01/17'); // => { isValid: false, info: 'Is Expired' }"],"params":[{"type":{"names":["String"]},"description":"The string date we want to validate","name":"date"}],"returns":[{"type":{"names":["Object"]},"description":"An object containing a isValid boolean and some info"}]},{"title":"matches","since":"v2.0.0","syntax":"matches(cvn, card)","usage":{"commonjs":{"title":"CommonJs","code":"const matches = require('simple-card/matches');"},"standard":{"title":"Standard","code":"import matches from 'simple-card/matches';"},"browser":{"title":"Browser","code":"<script src=\"path/to/simple-card/matches/index.js\"></script>"}},"desc":"Validates that the card type (generated from the card number) matches and is valid with the cvn provided","examples":["matches('333', '4111111111111111'); // => true\rmatches('4444', '4111111111111111'); // => false"],"params":[{"type":{"names":["String","Number"]},"description":"The string cvn we want to validate","name":"cvn"},{"type":{"names":["String","Number"]},"description":"The string card we want to validate with","name":"card"}],"returns":[{"type":{"names":["Boolean"]},"description":"A boolean based on if the match is valid or not"}]},{"title":"number","since":"v2.0.0","syntax":"number(card)","usage":{"commonjs":{"title":"CommonJs","code":"const number = require('simple-card/number');"},"standard":{"title":"Standard","code":"import number from 'simple-card/number';"},"browser":{"title":"Browser","code":"<script src=\"path/to/simple-card/number/index.js\"></script>"}},"desc":"Validates that the card number is an actual valid number with a luhn algorithm. As well as finds the cards type","examples":["number('4111111111111111'); // => { isValid: true, cardType: 'visa' }\rnumber('4444'); // => { isValid: false, cardType: 'Invalid Card Number' }"],"params":[{"type":{"names":["String","Number"]},"description":"The string card we want to validate","name":"card"}],"returns":[{"type":{"names":["Object"]},"description":"An object containing a isValid boolean and some info"}]},{"title":"validate","since":"v2.0.0","syntax":"validate(card)","usage":{"commonjs":{"title":"CommonJs","code":"const validate = require('simple-card/validate');"},"standard":{"title":"Standard","code":"import validate from 'simple-card/validate';"},"browser":{"title":"Browser","code":"<script src=\"path/to/simple-card/validate/index.js\"></script>"}},"desc":"Validates a credit card object comparing and validating each piece of data on the card passed in","examples":["const test = simpleCard({\n    number: '4111111111111111',\n    cvn: '333',\n    date: '09/20'\n  }); // => { isValid: true, cardType: 'visa', cvnType: 'norm', expired: false }"],"params":[{"type":{"names":["Object"]},"description":"The card Object that we wish to be validated","name":"card"}],"returns":[{"type":{"names":["Object"]},"description":"Returns an object of information about the test and whether or not it passed"}]}]