`let`命令和`const`命令
基本用法：用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

 let声明的变量不存在变量提示，所声明的变量一定要在声明后使用，否则报错。
 // var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

let不允许在相同作用域内，重复声明同一个变量。
function func(arg) {
  let arg;
}
func() // 报错

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错

块级作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

const命令
const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;
PI = 3;


const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (true) {
  const MAX = 5;
}

MAX

const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
if (true) {
  console.log(MAX); // ReferenceError
  const MAX = 5;
}

const声明的常量，也与let一样不可重复声明。
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。


变量的解构赋值
数组的解构赋值
let [a, b, c] = [1, 2, 3];
