// 在 Promise 类中，有 5 种静态方法。我们在这里简单介绍下它们的使用场景。

// 1.Promise.all();   接受一个 promise 数组作为参数
// 例如，并行下载几个 URL，并等到所有内容都下载完毕后再对它们进行处理。
/*
let p = Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    })
]);
// 下面的 Promise.all 在 3 秒之后被 settled，然后它的结果就是一个 [1, 2, 3] 数组
p.then((resolve, reject) => {
    console.log(resolve);
})

// 一个常见的技巧是，将一个任务数据数组映射（map）到一个 promise 数组，然后将其包装到 Promise.all。
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 等待所有任务都 resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));



    */
/**
 * 一个更真实的示例，通过 GitHub 用户名来获取一个 GitHub 用户数组中用户的信息
 * （我们也可以通过商品 id 来获取商品数组中的商品信息，逻辑都是一样的）
 */
const fetch = require("node-fetch");
let names = ['ruanyf', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests).then(responses => {
    responses.forEach((response, index) => {
        // console.log(index);
        // console.log(response);
        console.log(index + `${response.url}: ${response.status}`);
    })
    return responses;
})
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.map(user => console.log(user.name)))
    .catch(err => console.log(err));

// 0https://api.github.com/users/ruanyf: 200
// 1https://api.github.com/users/remy: 200
// 2https://api.github.com/users/jeresig: 200
// Ruan YiFeng
// Remy Sharp
// John Resig

    // 如果任意一个 promise 被 reject，
    // 由 Promise.all 返回的 promise 就会立即 reject，并且带有的就是这个 error。