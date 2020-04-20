// 需求  遍历目录是操作文件时的一个常见需求。
// 在wwwroot文件夹下面有images css js index.html找出wwwroot目录下面所有的目录

const path = require('path');
const fs = require('fs');
let pathTest = './wwwroot/';

// 1.递归算法
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
/*
    陷阱：
    使用递归算法编写的代码虽然简洁，
    但由于每递归一次就产生一次函数调用，在需要优先考虑性能时，
    需要把递归算法转换为循环算法，以减少函数调用次数。
*/


// 2.遍历算法

// 3.同步遍历
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

// 4.异步遍历

function travel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isDirectory()) {
                        travel(pathname, callback, function () {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function () {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}