/*! decrement_if_less_than_first v0.0.0 - MIT license */
'use strict';

var decrement_if_less_than_first = function (i) {

  return i < 4 ? i-1 : i
}

if ( typeof module !== "undefined" ) {
  module.exports = decrement_if_less_than_first;
}
