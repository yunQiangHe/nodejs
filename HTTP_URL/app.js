const http = require('http');//引入HTTP模块
const url = require('url');//引入URL模块

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });

    // http://127.0.0.1:3030/?name=hyq&&age=90
    console.log(req.url);
    // /?name=hyq&&age=90
    //     / favicon.ico

    if (req.url != '/favicon.ico') {
        let temp = url.parse(req.url, true).query;

        console.log(`This is ${temp.name},age ${temp.age}.`);
    }


    res.write("This is nodejs 加油");

    res.end(); //结束响应

}).listen(3030);



console.log('Server running at http://127.0.0.1:3030/');