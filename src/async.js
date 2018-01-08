/**
 *

// 1. 含义
// async 使异步操作更加便捷；
// async 是 Generator 函数的语法糖；

 * End
 */

const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 1000);
    });
};

const testAsync = async () => {
    const t = await f();
    console.log(t);
};

testAsync();
