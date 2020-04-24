const http = require('http');
const url = require('url');
const routes = require('./module/routes');

http.createServer(function (request, response) {
  // 1.创建静态服务
  routes.static(request, response, 'static');

  // 路由
  let pathname = url.parse(request.url).pathname;

  if (pathname == '/login') {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.end('login');
  } else if (pathname == '/' || pathname == '/index') {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.end('index');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
    response.end('404 Not Found!');
  }



}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');