# cta-tool-request [ ![build status](https://git.sami.int.thomsonreuters.com/compass/cta-tool-request/badges/master/build.svg)](https://git.sami.int.thomsonreuters.com/compass/cta-tool-request/commits/master) [![coverage report](https://git.sami.int.thomsonreuters.com/compass/cta-tool-request/badges/master/coverage.svg)](https://git.sami.int.thomsonreuters.com/compass/cta-tool-request/commits/master)

Request Modules for Compass Test Automation, One of Libraries in CTA-OSS Framework

## General Overview

This modules provides the Request as [Tool](https://git.sami.int.thomsonreuters.com/compass/cta-tool) to make http requests.

If you plan to use it in a [Flowcontrol](https://git.sami.int.thomsonreuters.com/compass/cta-flowcontrol) application, try to consider using the brick adapter of this tool [cta-brick-request](https://git.sami.int.thomsonreuters.com/compass/cta-brick-request) especially if you'd like to expose your http calls contracts in the configuration of your app.

## How to use it

### Instantiation

````javascript
const Request = require('cta-tool-request');
const request = new Request();
````

### Supported http methods

All http methods are supported and can be run via the main method "exec".

Example:

````javascript  
request.exec({
  method: 'HEAD',
  url: 'http://api.compass.int.thomsonreuters.com/authorize/v1/userRoles?appId=demo&userId=U1',  
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
})
````

Although, this module provide shortcuts for the most used methods: GET, POST, PUT, DELETE

Example:

````javascript  
request.get('http://api.compass.int.thomsonreuters.com/authorize/v1/userRoles?appId=demo&userId=U1')
.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
})
````

## Response

All exported methods are promises that resolve to an object with these fields:

- status: response status
- type: response data type (ex. application/json, text/html...)
- data: response data
- headers: response headers

### More examples

GET via exec method

````javascript  
request.exec({
  method: 'GET',
  url: 'http://domain.com',  
}).then((result) => {
  // ...
})
````

GET with some headers

````javascript
request.get('http://domain.com', {'x-from': 'CTA'})
  .then((result) => {
  // ...
  })
````  

Or via exec

````javascript  
request.exec({
  method: 'GET',
  url: 'http://domain.com',
  headers: {'x-from': 'CTA'},
}).then((result) => {
  // ...
})
````

POST a body

````javascript
request.post('http://domain.com', {foo: 'bar'})
  .then((result) => {
    // ...
  })  
````

Or via exec

````javascript  
request.exec({
  method: 'POST',
  url: 'http://domain.com',
  body: {foo: 'bar'},
}).then((result) => {
  // ...
})
````

POST with body and headers

````javascript
request.post('http://domain.com', {foo: 'bar'}, {'x-from': 'CTA'})
  .then((result) => {
  // ...
  })
````  

Or via exec

````javascript  
request.exec({
  method: 'POST',
  url: 'http://domain.com',
  body: {foo: 'bar'},
  headers: {'x-from': 'CTA'},
}).then((result) => {
  // ...
})
````

Other http methods can be used in the same way... 