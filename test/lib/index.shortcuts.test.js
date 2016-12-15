'use strict';

const o = require('../common');

describe('shortcuts', function() {
    let _exec;
    beforeEach(function() {
       _exec = o.sinon.stub(o.lib, 'exec', function() {
           return Promise.resolve();
       });
    });
    afterEach(function() {
        _exec.restore();
    });
  ['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
    it(method, function(done) {
      if (method === 'get') {
        o.lib[method](o.url)
          .then(() => {
            o.sinon.assert.calledWith(_exec, {
              method: method,
              url: o.url,
              headers: undefined,
            });
            done();
          })
          .catch((err) => {
            done(err);
          });
      } else {
        o.lib[method](o.url, {foo: 'bar'})
          .then(() => {
            o.sinon.assert.calledWith(_exec, {
              method: method,
              url: o.url,
              headers: undefined,
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
