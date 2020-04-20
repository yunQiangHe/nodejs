// 同时存在 exports 和 module.exports 来导出模块


const md3 = require('./commonjs3');

console.log(md3);

// 总结 ： 通过这样的一个对比的例子就可以比较清晰的对比出  exports 和  module.exports  的区别:
// 1、当 exports 和 module.exports 同时存在的时候，module.exports 会盖过 exports
// 2、当模块内部全部是 exports 的时候， 就等同于 module.exports
// 3、最后 我们就可以认定为  exports  其实就是 module.exports 的子集。
