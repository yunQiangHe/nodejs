let promise = Promise.resolve();

promise.then(() => console.log("promise done!")); //2

console.log("code finished"); //1

// 如果你运行它，你会首先看到 code finished，然后才是 promise done。
// 这很奇怪，因为这个 promise 肯定是一开始就完成的。
// 为什么 .then 会在之后才被触发？这是怎么回事？