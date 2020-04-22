async function ff() {
    return 1;
}

// 在函数前面的 “async” 这个单词表达了一个简单的事情：
// 即这个函数总是返回一个 promise。
// 其他值将自动被包装在一个 resolved 的 promise 中


// 只在 async 函数内工作
// let value = await promise;

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1000);
    });

    // 关键字 await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。
    let result = await promise; // 等待，直到 promise resolve (*)

    console.log(result);
}

f();

// 让我们强调一下：await 字面的意思就是让 JavaScript 引擎等待直到 promise settle，
// 然后以 promise 的结果继续执行。这个行为不会耗费任何 CPU 资源，
// 因为引擎可以同时处理其他任务：执行其他脚本，处理事件等。

// 不能在普通函数中使用 await
// 如果我们尝试在非 async 函数中使用 await 的话，就会报语法错误：
// function g() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax error：await is only valid in async function
// }


// 让我们拿 Promise 链 那一章的 showAvatar() 例子，并将其改写成 async/await 的形式：

async function showAvatar() {
    // 读取我们的 JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // 读取 github 用户信息
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // 显示头像
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // 等待 3 秒
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
})();
/*
函数前面的关键字 async 有两个作用：

让这个函数总是返回一个 promise。
允许在该函数内使用 await。
Promise 前的关键字 await 使 JavaScript 引擎等待该 promise settle，然后：

如果有 error，就会抛出异常 — 就像那里调用了 throw error 一样。
否则，就返回结果。
这两个关键字一起提供了一个很好的用来编写异步代码的框架，这种代码易于阅读也易于编写。

有了 async/await 之后，我们就几乎不需要使用 promise.then/catch，但是不要忘了它们是基于 promise 的，
因为有些时候（例如在最外层作用域）我们不得不使用这些方法。并且，当我们需要同时等待需要任务时，Promise.all 是很好用的。
*/


// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadJson('no-such-user.json')
//     .catch(alert); // Error: 404

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = response.json();
        return json;
    } else {
        throw new Error(response.status);
    }
}