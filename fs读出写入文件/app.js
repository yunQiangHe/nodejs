const fs = require('fs');

// 引流  

let readStream = fs.createReadStream('./https.jpeg');

// console.log(readStream); 
let count = 0;
let str = '';
readStream.on('data', (data) => {
    str += data;
    count++;
});

readStream.on('end', () => {
    console.log("读出完毕。");
    console.log(count);
});

readStream.on('error', (error) => {
    console.log(error);
});