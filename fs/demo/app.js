// 需求 
//判断服务器上面有木有upload 目录，如果没有创建这个目录，如果有的话不做操作。（图片上传）

const fs = require('fs');
let path = './Upload';
// 获取文件信息 fs.stat

fs.stat(path, (err, data) => {
    if (err) {
        console.log(err);
        // 执行创建目录
        mkdir(path);
        return;
    }

    // console.log(data);
    // console.log(data.isFile());
    // console.log(data.isDirectory());

    // Upload是文件还是目录

    if (data.isDirectory()) {
        console.log(`Upload目录已存在`);
    } else {
        fs.unlink(path, (err) => {
            if (!err) {
                // 执行创建目录
                mkdir(path);
            } else {
                console.log('请检查传入是否正确！');
            }
        });
    }

});

function mkdir(dir) {
    fs.mkdir(path, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}
