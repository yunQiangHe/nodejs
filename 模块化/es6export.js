// export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口

const a = "123";
const fn = () => window.location.href;


// export { xxx }
export { fn };

// export 可以导出的是一个对象中包含的多个 属性，方法。 
// export default 只能导出 一个 可以不具名的 对象。