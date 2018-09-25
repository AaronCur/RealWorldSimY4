var path = require('path');
var expect = require('chai').expect;

var decrement_if_less_than_first = require(path.join(__dirname, '..', './decrement_if_less_than_first.js'));

describe('decrement_if_less_than_first()', function () {
  'use strict';

  it('exists', function () {
    expect(decrement_if_less_than_first).to.be.a('function');

  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(4)).to.equal(4);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(2)).to.equal(1);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(8)).to.equal(8);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(3)).to.equal(2);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(9)).to.equal(9);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(4)).to.equal(4);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(10)).to.equal(10);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(5)).to.equal(5);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(11)).to.equal(11);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(6)).to.equal(6);
  });

  it('Test Output', function () {
    expect(decrement_if_less_than_first(1)).to.equal(0);
  });



  // Add more assertions here
});
