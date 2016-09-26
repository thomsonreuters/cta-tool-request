'use strict';

const o = require('../common');
const test = {};

describe('singleton', () => {
  it('load as singleton', () => {
    test.one = new o.Lib();
    test.one.foo = 'bar';
    test.two = new o.Lib();
    o.assert.strictEqual(test.two.foo, 'bar');
    test.two.bar = 'foo';
    o.assert.strictEqual(test.one.bar, 'foo');
  });
  it('load as non singleton', () => {
    test.three = new o.Lib({}, {
      name: 'request',
      properties: {},
      singleton: false,
    });
    o.assert.notProperty(test.three, 'foo');
    o.assert.notProperty(test.three, 'bar');
    test.three.foobar = 'foobar';
    o.assert.notProperty(test.one, 'foobar');
    o.assert.notProperty(test.two, 'foobar');
  });
});
