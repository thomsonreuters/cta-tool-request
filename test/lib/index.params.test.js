'use strict';

const o = require('../common');

describe('params', () => {
  it('no params', (done) => {
    o.lib.exec()
      .then(() => {
        done('should not be here');
      })
      .catch(() => {
        // console.log(err);
        done();
      });
  });
  it('wrong paramss', (done) => {
    o.lib.exec({
      method: true,
      url: 123,
    })
    .then(() => {
      done('should not be here');
    })
    .catch(() => {
      // console.log(err);
      done();
    });
  });
});
