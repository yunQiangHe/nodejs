// 它的理念是将 result 通过 .then 处理程序（handler）链进行传递。
// 如果 .then（或 catch/finally 都可以）处理程序（handler）返回一个 promise，那么链的其余部分将会等待，直到它状态变为 settled。
// 当它被 settled 后，其 result（或 error）将被进一步传递下去。

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000);
}).then((result) => {
    console.log(`第一次${result}`);
    return result * 2;
}).then((result) => {
    console.log(`第2次${result}`);
    return result * 2;
}).then((result) => {
    console.log(`第3次${result}`);
    return result * 2;
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally");
});

// 第一次123
// 第2次246
// 第3次492
// finally

// 运行流程如下：

// 初始 promise 在 1 秒后进行 resolve (*)，
// 然后 .then 处理程序（handler）被调用 (**)。
// 它返回的值被传入下一个 .then 处理程序（handler）(***)
// ……依此类推。

// .then(handler) 中所使用的处理程序（handler）可以创建并返回一个 promise。