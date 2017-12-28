// async

// 1. 含义
// async 使异步操作更加便捷；
// async 是 Generator 函数的语法糖；

const asyncTest = async function() {
    const f1 = await 5;
    const f2 = await 6;
    console.log(f1);
    console.log(f2);
    return 1;
};

asyncTest().then(data => {
    console.log(data);
});
