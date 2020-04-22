function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// 用法：
// loadScript('path/script.js', (err, script) => {...})


let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script);
        })
    })
}

// 用法：
// loadScriptPromise('path/script.js').then(...)



// 在实际开发中，我们可能需要 promisify 很多函数，所以使用一个 helper 很有意义。
// 我们将其称为 promisify(f)：它接受一个需要被 promisify 的函数 f，并返回一个包装（wrapper）函数。


function promisify(f) {
    return function (...args) { // 返回一个包装函数（wrapper-function）
        return new Promise((resolve, reject) => {
            function callback(err, result) { // 我们对 f 的自定义的回调
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾

            f.call(this, ...args); // 调用原始的函数
        });
    };
};

  // 用法：
//   let loadScriptPromise = promisify(loadScript);
//   loadScriptPromise(...).then(...);

// promisify(f, true) 来获取结果数组
function promisify(f, manyArgs = false) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) { // 我们自定义的 f 的回调
          if (err) {
            reject(err);
          } else {
            // 如果 manyArgs 被指定，则使用所有回调的结果 resolve
            resolve(manyArgs ? results : results[0]);
          }
        }
  
        args.push(callback);
  
        f.call(this, ...args);
      });
    };
  };
  
  // 用法：
//   f = promisify(f, true);
//   f(...).then(arrayOfResults => ..., err => ...)