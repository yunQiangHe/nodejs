let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(123);
        reject(Error("rejectinfo"));
    }, 1000);
});

p.then((v) => {
    console.log(v);
}, (err) => {
    console.log(err);
})


function loadScript(src) {

    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(Error(`Script load error for ${src}`));

        document.head.append(script);
    });

}