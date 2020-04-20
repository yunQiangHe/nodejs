const md5 = require('md5');

const sd = require('silly-datetime');

let temp = md5(1);

sd.locate('zh-cn');
let d1 = sd.format(new Date(), 'YYYY-MM-DD HH:mm'); // 2015-07-06 15:10
let d2 = sd.fromNow(+new Date() - 200000000); // 2 days ago  2天前

console.log(temp);

console.log(d1);
console.log(d2);