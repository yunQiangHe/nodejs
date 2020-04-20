// CommonJS常见规范

/**
1.一个文件就是一个模块，拥有单独的作用域
2.普通方式定义的 变量、函数、对象都属于该模块内
3.通过 require 来加载模块
4.通过 exports 和 module.exports 来暴露模块中的内容
 */



// 通过 module.exports 来导出模块
module.exports = {
    name: 'zhangsan',
    getName: function () {
        console.log(this.name);
    },
    changName: function (n) {
        this.name = n;
    }
}