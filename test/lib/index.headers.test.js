'use strict';

const o = require('../common');

describe('headers', () => {
  it('get with some headers', (done) => {
    o.nock('http://localhost')
      .get('/')
      .reply(function(uri, requestBody) {
        return [
          200,
          'ok',
          this.req.headers,
        ];
      });
    const params = {
      method: 'get',
      url: 'http://localhost',
      headers: {a: 1, b: 2},
    };
    o.lib.exec(params)
      .then((data) => {
        console.log('data: ', data);
        o.assert.strictEqual(data.data, 'ok');
        o.assert.strictEqual(data.headers.a, 1);
        o.assert.strictEqual(data.headers.b, 2);
        done();
      }).catch((err) => {
        done(err);
      });
  });
});
