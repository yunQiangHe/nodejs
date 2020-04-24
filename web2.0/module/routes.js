const url = require('url');
const fs = require('fs');
const path = require('path');

//获取文件对应的Content-Type类型
function getContentTyppe(extname) {
    // 1.fs.readFileSync 这个方法
    let data = fs.readFileSync('./data/mime.json'); //同步
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}

exports.static = (request, response, staticPath) => {

    let pathname = url.parse(request.url).pathname; //url模块 去掉参数
    pathname = pathname == '/' ? '/index.html' : pathname;

    let extname = path.extname(pathname);//获取后缀名

    // 过滤掉/favicon.ico
    if (pathname != '/favicon.ico') {
        // 2.通过fs模块读取文件
        fs.readFile("./static" + pathname, (err, data) => {
            if (err) {
                // console.log(err);
                response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                response.end('404 Not Found!');
                return;
            }

            let mine = getContentTyppe(extname); // 根据后缀名 返回相应的文件类型

            response.writeHead(200, { 'Content-Type': `${mine};charset=utf-8` });
            response.end(data);
        })

    }

}