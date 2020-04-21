// 回调函数

function loadScript(src) {
    // 创建一个 <script> 标签，并将其附加到页面
    // 这将使得具有给定 src 的脚本开始加载，并在加载完成后运行
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

// 脚本是“异步”调用的，因为它从现在开始加载，但是在这个加载函数执行完成后才运行。
loadScript('/my/script.js');
// loadScript 下面的代码
// 不会等到脚本加载完成才执行
// ...

// 但我们希望了解脚本何时加载完成，以使用其中的新函数和变量。
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

// 现在，如果我们想调用该脚本中的新函数，我们应该将其写在回调函数中：
loadScript('/my/script.js', function () {
    // 在脚本加载完成后，回调函数才会执行
    newFunction(); // 现在它工作了
});

// 这被称为“基于回调”的异步编程风格。
// 异步执行某项功能的函数应该提供一个 callback 参数用于在相应事件完成时调用。

// 在上述示例中，我们并没有考虑出现 error 的情况。
// 如果脚本加载失败怎么办？我们的回调应该能够对此作出反应
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// 加载成功时，它会调用 callback(null, script)，否则调用 callback(error)。
loadScript('/my/script.js', function (error, script) {
    if (error) {
        // 处理 error
    } else {
        // 脚本加载成功
    }
});

// 再次强调，我们在 loadScript 中所使用的方案其实很普遍。
// 它被称为“Error 优先回调（error-first callback）”风格。