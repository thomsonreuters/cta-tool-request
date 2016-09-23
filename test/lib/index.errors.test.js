'use strict';

const o = require('../common');

describe('errors', () => {
  it('reply with error', (done) => {
    const error = 'an error has occurred';
    o.nock('http://www.google.com')
      .get('/')
      .replyWithError(error);
    o.lib.get('http://www.google.com')
      .then(() => {
        done('should not be here');
      }).catch((err) => {
        o.assert.strictEqual(err.message, error);
        done();
      });
  });
});
