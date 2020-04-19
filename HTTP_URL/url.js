// 处理HTTP请求时url模块使用率超高
// 因为该模块允许解析URL、生成URL，以及拼接URL。


const url = require('url');

let api2 = 'https://user:pass@host.com:8080/p/a/t/h?query=string#hash';
console.log(url.parse(api2));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
//   }

let api = 'https://www.bilibili.com/video/BV11t411k79h?p=2';

console.log(url.parse(api));
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.bilibili.com',
//     port: null,
//     hostname: 'www.bilibili.com',
//     hash: null,
//     search: '?p=2',
//     query: 'p=2',
//     pathname: '/video/BV11t411k79h',
//     path: '/video/BV11t411k79h?p=2',
//     href: 'https://www.bilibili.com/video/BV11t411k79h?p=2'
//   }

console.log(url.parse(api, true));
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.bilibili.com',
//     port: null,
//     hostname: 'www.bilibili.com',
//     hash: null,
//     search: '?p=2',
//     query: [Object: null prototype] { p: '2' },
//     pathname: '/video/BV11t411k79h',
//     path: '/video/BV11t411k79h?p=2',
//     href: 'https://www.bilibili.com/video/BV11t411k79h?p=2'
//   }

let getValue = url.parse(api, true);
console.log(getValue.query);
console.log(getValue.query);
console.log(getValue.query.p);
console.log(typeof getValue.query);