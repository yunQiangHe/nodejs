/**
 *  模块化发展历程
 * 
 * 1.封装函数
 * 
 * 2.避免全局污染，单个模块封装到一个对象
 * 
 * 3.对象优化，立即执行函数不暴露私有成员
 */

function f1() {
    //  todo
}
function f2() {
    //  todo
}

//  整个项目变大了以后，就会遇到很多问题，
//  都是定义的全局变量，形成了比较严重的污染，
//  还有可能会出现因为重命名导致的各种问题。所以这些是需要进化的。

const module1 = {
    _number: 100,
    f1: () => {
        //todo
        console.log("module1 f1");
    },
    f2: () => {
        //todo
        console.log("module1 f2");
    },
    // ...
}

// 这样我们就没个模块定义一个对象，在需要的时候直接调用就好了，
// 但是这样也会存在一个问题 这样写的话会暴露全部的对象内部的属性，
// 内部状态可以被外部改变.  module._number = 100
// 如果我们支付相关模块这样子来写的话。我们随意的来改变支付的金额，那样就会出现比较危险的情况。

const module2 = (function () {
    let _money = 100;
    const m1 = () => {
        console.log("module2 m1");
    };
    const m2 = () => {
        console.log("module2 m2");
    };
    return {
        f1: m1,
        f2: m2
    }
})();

module1.f1();
module1.f2();
module2.f1();
module2.f2();