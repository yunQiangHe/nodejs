const fs = require('fs');

exports.getMine = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.xml':
            return 'text/xml';
        case '.gif':
            return 'text/gif';
        case '.jpeg':
            return 'text/jpeg';
        case '.png':
            return 'text/png';
        default:
            return 'text/plain' //纯文本格式
    }
}

// Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些 PHP 网页点击的结果却是下载一个文件或一张图片的原因。

// Content-Type 标头告诉客户端实际返回的内容的内容类型。

//获取文件对应的Content-Type类型
exports.getContentTyppe = function (extname) {
    // 1.fs.readFileSync 这个方法
    // let data = fs.readFileSync('./data/mime.json'); //同步
    // let mimeObj = JSON.parse(data.toString());
    // return mimeObj[extname];

    // 2.方法2
    return new Promise((resolve, reject) => {
        fs.readFile('./data/mime.json', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            let mimeObj = JSON.parse(data.toString());
            resolve(mimeObj[extname]);
        })
    })
}