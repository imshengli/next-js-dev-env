## 简介

生成实例的传统方法：通过构造函数；
ES6 引入了`class`，作为“对象的模板”；通过`class`，定义类。

## 代码分析

```js
let methodName = 'getArea';

// 通过`class`关键字定义类
class Point {
    // 类内部，默认是严格模式；所以不用写“use strict”

    // `constructor` 构造方法；
    // 一个类默认有 `constructor` 方法；
    // 默认返回实例对象，即 this，完全可以指定返回另外一个对象；
    constructor(x, y) {
        // this 代表 实例对象
        this.x = x;
        this.y = y;
    }

    // 定义类的方法
    // 其实是定义在类的`prototype`属性上面；
    // 类内部定义的所有方法，都是不可枚举的；Object.keys(Point.prototype)，这与ES5有差异；
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    // 类的属性名，可以采用表达式。
    [methodName]() {
        // ...
    }

}

typeof Point; // "function"
Point === Point.prototype.constructor // true

// 类使用时，必须通过 new 调用，否则会报错；
// 这也是和普通构造函数不同的地方；
const p1 = new Point(5, 10); // 创建实例
const p2 = new Point(10, 10);
// 实例的属性：除非显式定义在其本身（this），否则都在定义在原型上；
p1.hasOwnProperty('x'); // true
p1.hasOwnProperty('toString'); // false
p1.__proto__.hasOwnProperty('toString') // true
// 所有实例共享一个原型；
p1.__proto__ === p2.__proto__; // true
```

### 一次添加多个方法

```js
// 类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
// 一次向类添加多个方法
Object.assign(Point.prototype, {
    toString() {},
    toValue() {}
});
```
