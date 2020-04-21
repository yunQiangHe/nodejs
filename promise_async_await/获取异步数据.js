/**
 * 获取异步数据
 */

/*
如何解决了？

function getData() {
    setTimeout(function () {
        let name = "zhangsan";
        return name;
    }, 1000);
}

let result = getData();
console.log(result);  //undefined
*/

//1.远古时代--回调函数

function getData(callback) {
    setTimeout(function () {
        let name = "zhangsan";
        callback(name);
    }, 1000);
}

getData(function (name) {
    console.log(name);  //zhangsan
});


