'use strict';

const o = require('../common');

describe('exec', () => {
  it('exec.get', (done) => {
    const params = {
      method: 'get',
      url: o.url,
    };
    o.lib.exec(params)
      .then((data) => {
        console.log('data: ', data);
        // o.sinon.assert.calledOnce(o._get);
        o.assert.deepEqual(data.data, {method: 'GET'});
        done();
      }).catch((err) => {
        done(err);
      });
  });

  it('exec.post', (done) => {
    const params = {
      method: 'post',
      url: o.url,
      body: {foo: 'bar'},
    };
    o.lib.exec(params)
      .then((data) => {
        console.log('data: ', data);
        // o.sinon.assert.calledOnce(o._post);
        o.assert.deepEqual(data.data, {method: 'POST'});
        done();
      }).catch((err) => {
        done(err);
      });
  });

  it('exec.put', (done) => {
    const params = {
      method: 'put',
      url: o.url,
      body: {foo: 'bar'},
    };
    o.lib.exec(params)
      .then((data) => {
        console.log('data: ', data);
        // o.sinon.assert.calledOnce(o._put);
        o.assert.deepEqual(data.data, {method: 'PUT'});
        done();
      }).catch((err) => {
        done(err);
      });
  });

  it('exec.delete', (done) => {
    const params = {
      method: 'delete',
      url: o.url,
      body: {foo: 'bar'},
    };
    o.lib.exec(params)
      .then((data) => {
        console.log('data: ', data);
        // o.sinon.assert.calledOnce(o._delete);
        o.assert.deepEqual(data.data, {method: 'DELETE'});
        done();
      }).catch((err) => {
        done(err);
      });
  });
});
