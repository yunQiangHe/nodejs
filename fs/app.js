const fs = require('fs');
//1. 获取文件信息 fs.stat

// fs.stat('./package.json', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`是文件：${data.isFile()}`); //是文件：true

//     console.log(`是目录：${data.isDirectory()}`);  //是目录：false
// });

// fs.stat('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`是文件：${data.isFile()}`); //是文件：false
//     console.log(`是目录：${data.isDirectory()}`);  //是目录：ture
// });

// 2. fs.mkdir 创建目录
// fs.mkdir('./css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("创建成功！");
// })


//3. fs.writeFile 创建写入文件
// fs.writeFile('./html/index.html', "Hello nodejs fs.writeFile", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("创建写入文件成功！");
// })

// 4.appendFile 追加文件

// fs.appendFile('./css/base.css', '\n h2{color:"red"}', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("appendFile成功！");
// })

//5. fs.readFile读出文件

// fs.readFile('./html/index.html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data); //Buffer
//     console.log(data.toString()); //转换字符串
// });


// 6.fs.readdir 读出目录
// fs.readdir('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data); //[ 'index.html', 'test' ]
// });

// 7.fs.rename 重命名 功能 1重命名 2移动文件

// fs.rename('./html/test/a.html', './html/test/b.html', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("重命名文件成功！");
// });

// fs.rename('./html/test/a.html', './html/b.html', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("移动重命名文件成功！");
// });

// 8. fs.rmdir 删除目录
// fs.rmdir('./html/test', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("删除目录");
// });

// 9. fs.unlink 删除文件

// fs.unlink('./html/test/b.html', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("删除文件");
// });