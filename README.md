# CTA Request Tool
------------------

## How to use it

### Instantiation

````javascript
const Request = require('cta-tool-request');
const request = new Request();
````

### GET

````javascript
request.get('http://google.com')
  .then((result) => {
    // result is an object with these fields
    // - status: response status
    // - type: response data type (ex. application/json, text/html...)
    // - data: response data
    // - headers: response headers
  })
  .catch((error) => {
    // ...
  })
````

Or

````javascript  
request.exec({
  method: 'GET',
  url: 'http://google.com',
  headers: {'x-header-1': 'foo'},
}).then((result) => {
  // ...
})
````

Send some headers

````javascript
request.get('http://google.com', {'x-header-1': 'foo'})
  .then((result) => {
  // ...
  })
````  

Or 

````javascript  
request.exec({
  method: 'GET',
  url: 'http://google.com',
  headers: {'x-header-1': 'foo'},
}).then((result) => {
  // ...
})
````

### POST

````javascript
request.post('http://google.com', {foo: 'bar'})
  .then((result) => {
    // ...
  })  
````

Or

````javascript  
request.exec({
  method: 'POST',
  url: 'http://google.com',
  body: {foo: 'bar'},
}).then((result) => {
  // ...
})
````

Send some headers

````javascript
request.post('http://google.com', {foo: 'bar'}, {'x-header-1': 'foo'})
  .then((result) => {
  // ...
  })
````  

Or 

````javascript  
request.exec({
  method: 'POST',
  url: 'http://google.com',
  body: {foo: 'bar'},
  headers: {'x-header-1': 'foo'},
}).then((result) => {
  // ...
})
````