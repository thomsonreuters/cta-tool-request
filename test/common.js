'use strict';

const chai = require('chai');
const sinon = require('sinon');
const request = require('superagent');
const Lib = require('../lib');
const lib = new Lib();

module.exports = {
  nock: require('nock'),
  assert: chai.assert,
  request: request,
  Lib: Lib,
  lib: lib,
  sinon: sinon,
  _exec: sinon.spy(lib, 'exec'),
  _get: sinon.spy(request, 'get'),
  _post: sinon.spy(request, 'post'),
  _put: sinon.spy(request, 'put'),
  _delete: sinon.spy(request, 'delete'),
  server: require('./server.testdata'),
  url: 'http://localhost:9000',
};
