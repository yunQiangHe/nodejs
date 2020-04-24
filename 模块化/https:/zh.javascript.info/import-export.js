// https://zh.javascript.info/import-export

// 导出（export）和导入（import）指令有几种语法变体。


// 1.通过在声明之前放置 export 来标记任意声明为导出，无论声明的是变量，函数还是类都可以。

// 导出数组
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// 导出类
export class User {
    constructor(name) {
        this.name = name;
    }
}

// 2.导出与声明分开
// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // 导出变量列表