//every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const arr1 = [1, 30, 39, 29, 10, 13];
arr1.every((currentValue) => currentValue<40);