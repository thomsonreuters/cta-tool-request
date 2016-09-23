'use strict';

const Request = require('cta-tool-request');
const request = new Request();

const co = require('co');
const apiURL = 'http://api.compass.int.thomsonreuters.com/authorize/v1/userRoles';

co(function* coroutine() {
  let result;
  result = yield request.get(apiURL + '?appId=demo&userId=U1');
  console.log(result);
  result = yield request.post(apiURL, {
    appId: 'demo',
    user: '6017419',
    roles: ['one', 'two'],
  }, {
    'X-Compass-APIKEY': '770190b5e9895fbed52e1861e6c62b9a6feb49485ec567699fd50e47b6c4017b',
  });
  console.log(result);
}).catch((err) => {
  console.error(err);
});
