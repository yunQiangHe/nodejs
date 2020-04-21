const fs = require('fs');

let pathTest = './wwwroot';
let pathArr = [];

// 1.定义一个isDir的方法 判断是一个资源还是目录
async function isDir(path) {
    return new Promise((resolve, reject) => {
        // 异步
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

// 2.获取wwwroot 资源循环遍历
function main() {

    let pathTest = './wwwroot';
    let pathArr = [];

    fs.readdir(pathTest, async (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        for (let i = 0; i < data.length; i++) {
            if (await isDir(pathTest + '/' + data[i])) {
                pathArr.push(data[i]);
            }
        }
        console.log(pathArr);
    })
}

main();