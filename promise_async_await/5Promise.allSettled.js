const fetch = require("node-fetch");

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];


Promise.allSettled(urls.map(url => fetch(url)))
    .then(responses => {
        // for (let response of responses) {
        //     // console.log(response);
        //     if(response.status == 'fulfilled'){
        //         console.log(`${response.value.url}`);
        //     }
        //     if(response.status == 'rejected'){
        //         console.log(`${response.reason.message}`);
        //     }
        // }

        responses.forEach((response, num) => {
            if (response.status == 'fulfilled') {
                console.log(`${urls[num]}:${response.value.url}`);
            }
            if (response.status == 'rejected') {
                console.log(`${urls[num]}:${response.reason.message}`);
            }
        });
    })



/**
 * {
status: 'fulfilled',
value: Response {
size: 0,
timeout: 0,
[Symbol(Body internals)]: { body: [Gunzip], disturbed: false, error: null },
[Symbol(Response internals)]: {
  url: 'https://api.github.com/users/iliakan',
  status: 200,
  statusText: 'OK',
  headers: [Headers],
  counter: 0
}
{
  status: 'rejected',
  reason: FetchError: request to https://no-such-url/ failed, reason: getaddrinfo ENOTFOUND no-such-url
      at ClientRequest.<anonymous> (/Users/heyunqiang/Documents/nodejs/promise_async_await/node_modules/_node-fetch@2.6.0@node-fetch/lib/index.js:1455:11)
      at ClientRequest.emit (events.js:210:5)
      at TLSSocket.socketErrorListener (_http_client.js:406:9)
      at TLSSocket.emit (events.js:210:5)
      at emitErrorNT (internal/streams/destroy.js:92:8)
      at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
      at processTicksAndRejections (internal/process/task_queues.js:80:21) {
    message: 'request to https://no-such-url/ failed, reason: getaddrinfo ENOTFOUND no-such-url',
    type: 'system',
    errno: 'ENOTFOUND',
    code: 'ENOTFOUND'
  }
}
 */


if (!Promise.allSettled) {
    Promise.allSettled = function (promises) {
        return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
            state: 'fulfilled',
            value
        }), reason => ({
            state: 'rejected',
            reason
        }))));
    };
}