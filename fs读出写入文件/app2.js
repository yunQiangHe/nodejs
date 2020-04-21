const fs = require('fs');

// 引流  

let readStream = fs.createReadStream('./https.jpeg');

let wirteStream = fs.createWriteStream('./img/https.jpeg');

readStream.pipe(wirteStream);