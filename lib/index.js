'use strict';

const request = require('superagent');
const validate = require('cta-common').validate;

class Request {
  constructor() {

  }

  /**
   * Execute an http request
   * @param {Object} params - object of parameters
   * @param {String} params.method - http method: GET, POST, PUT, DELETE, HEAD...
   * @param {String} params.url - request url
   * @param {String} params.body - optional request body
   * @param {String} params.headers - optional request headers
   * @returns {Promise}
   */
  exec(params) {
    return new Promise((resolve, reject) => {
      const vp = validate(params, {
        type: 'object',
        items: {
          method: 'string',
          url: 'string',
          body: {
            type: 'object',
            optional: true,
            defaultTo: {},
          },
          headers: {
            type: 'object',
            optional: true,
            defaultTo: {},
          },
        },
      });
      if (!vp.isValid) {
        return reject(vp);
      }
      let req = request[params.method.toLocaleLowerCase()](params.url);
      if (params.body) {
        req = req.send(params.body);
      }
      if (params.headers) {
        Object.keys(params.headers).forEach(function(header) {
          req = req.set(header, params.headers[header]);
        });
      }
      req.end(function(error, response) {
        if (error) {
          return reject(error);
        }
        resolve({
          status: response.status,
          type: response.type,
          data: Object.keys(response.body).length ? response.body : response.text,
          headers: response.headers,
        });
      });
    });
  }

  /**
   * http get shortcut
   * @param url
   * @param headers
   * @returns {Promise}
   */
  get(url, headers) {
    return this.exec({
      method: 'get',
      url: url,
      headers: headers,
    });
  }

  /**
   * http post shortcut
   * @param url
   * @param body
   * @param headers
   * @returns {Promise}
   */
  post(url, body, headers) {
    return this.exec({
      method: 'post',
      url: url,
      body: body,
      headers: headers,
    });
  }

  /**
   * http put shortcut
   * @param url
   * @param body
   * @param headers
   * @returns {Promise}
   */
  put(url, body, headers) {
    return this.exec({
      method: 'put',
      url: url,
      body: body,
      headers: headers,
    });
  }

  /**
   * http delete shortcut
   * @param url
   * @param body
   * @param headers
   * @returns {Promise}
   */
  delete(url, body, headers) {
    return this.exec({
      method: 'delete',
      url: url,
      body: body,
      headers: headers,
    });
  }
}

module.exports = Request;
