// CommonJS常见规范

/**
1.一个文件就是一个模块，拥有单独的作用域
2.普通方式定义的 变量、函数、对象都属于该模块内
3.通过 require 来加载模块
4.通过 exports 和 module.exports 来暴露模块中的内容
 */


// 同时存在 exports 和 module.exports 来导出模块
let a = 123;

const getSome = () => {
    console.log("yyy");
};

const getA = () => {
    console.log(a);
};

exports.getSome = getSome;
module.exports = getA;



// 总结 ： 通过这样的一个对比的例子就可以比较清晰的对比出  exports 和  module.exports  的区别:
// 1、当 exports 和 module.exports 同时存在的时候，module.exports 会盖过 exports
// 2、当模块内部全部是 exports 的时候， 就等同于 module.exports
// 3、最后 我们就可以认定为  exports  其实就是 module.exports 的子集。