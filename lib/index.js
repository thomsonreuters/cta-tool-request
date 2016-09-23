'use strict';

const request = require('superagent');
const validate = require('cta-common').validate;

class Request {
  constructor() {

  }

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

  get(url, headers) {
    return this.exec({
      method: 'get',
      url: url,
      headers: headers,
    });
  }

  post(url, body, headers) {
    return this.exec({
      method: 'post',
      url: url,
      body: body,
      headers: headers,
    });
  }

  put(url, body, headers) {
    return this.exec({
      method: 'put',
      url: url,
      body: body,
      headers: headers,
    });
  }

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
