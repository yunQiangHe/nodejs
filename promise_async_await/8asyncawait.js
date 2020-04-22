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
function g() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error：await is only valid in async function
  }