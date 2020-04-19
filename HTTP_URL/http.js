// var http = require('http'); //引入HTTP模块

// http.createServer(function (request, response) {
//     // 设置响应头
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     //返回内容
//     response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');


const http = require('http');

http.createServer((req, res) => {

    /*
        req 获取客户端传来的信息
        res 给浏览器的信息
    */

    console.log(req.url); // 获取URL

    // 设置响应头 状态吗200 文件类型html
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });

    // res.write("<head> <meta charset='utf-8'> </head>");

    res.write("This is nodejs 加油");

    res.end(); //结束响应

}).listen(3030);

console.log('Server running at http://127.0.0.1:3030/');