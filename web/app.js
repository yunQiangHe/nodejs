const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url'); //http://127.0.0.1:8081/login.html?a=1&&b=2

const common = require('./module/common');

http.createServer(function (request, response) {

  // http://127.0.0.1:8081/index.html
  // http://127.0.0.1:8081/login.html
  // http://127.0.0.1:8081/login.html?qq

  // 1.获取地址  
  console.log(request.url); //  /favicon.ico  /index.html

  let pathname = url.parse(request.url).pathname; //url模块 去掉参数
  pathname = pathname == '/' ? '/index.html' : pathname;

  let extname = path.extname(pathname);//获取后缀名

  // 过滤掉/favicon.ico
  if (pathname != '/favicon.ico') {
    // 2.通过fs模块读取文件
    fs.readFile("./static" + pathname, async (err, data) => {
      if (err) {
        // console.log(err);
        response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        response.end('404 Not Found!');
        return;
      }

      let mine = await common.getContentTyppe(extname); // 根据后缀名 返回相应的文件类型

      response.writeHead(200, { 'Content-Type': `${mine};charset=utf-8` });
      response.end(data);
    })

  }


}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');