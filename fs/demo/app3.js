const fs = require('fs');

let pathTest = './wwwroot';
let pathArr = [];

fs.readdir(pathTest, (err, data) => {
    if (err) {
        // console.log(err);  //[ 'css', 'iamges', 'index.html', 'js' ]
        return;
    }
    // console.log(data);

    (function getDir(i) {
        if (i == data.length) {
            console.log(pathArr); //[ 'css', 'iamges', 'js' ]
            return;
        }

        // 异步
        fs.stat(pathTest + '/' + data[i], (err, stats) => {
            if (stats.isDirectory()) {
                pathArr.push(data[i]);
            }
            getDir(i + 1)
        });
    })(0);

});



