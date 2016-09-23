'use strict';

const o = require('../common');

describe('shortcuts', () => {
  ['get', 'post', 'put', 'delete'].forEach((method) => {
    it(method, (done) => {
      if (method === 'get') {
        o.lib[method](o.url)
          .then(() => {
            o.sinon.assert.calledWith(o._exec, {
              method: method,
              url: o.url,
            });
            done();
          })
          .catch((err) => {
            done(err);
          });
      } else {
        o.lib[method](o.url, {foo: 'bar'})
          .then(() => {
            o.sinon.assert.calledWith(o._exec, {
              method: method,
              url: o.url,
              body: {foo: 'bar'},
            });
            done();
          })
          .catch((err) => {
            done(err);
          });
      }
    });
  });
});
