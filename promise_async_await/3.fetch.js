const fetch = require("node-fetch");

fetch("https://api.github.com/users/ruanyf")
    // 当远程服务器响应时，下面的 .then 开始执行
    .then((response) => {
        // 当 user.json 加载完成时，response.text() 会返回一个新的 promise
        // 该 promise 以加载的 user.json 为 result 进行 resolve
        return response.json();
    })
    .then((githubUser) => {
        console.log(githubUser);
    })