## `Promise`&`async`&`awit`

### Promise对象

期约是一个有状态的对象：

- 待定（pending）

```javascript
let p = new Promise(()=>{})
```

- 解决（resolved）

- 拒绝（rejected）

  控制期约状态的转换是通过调用它的两个参数实现的。`resolve()`、`reject()`。调用`resolve()`会把状态切换为兑现，调用`reject()`会把状态切换为拒绝。

  ```javascript
  let p1 = new Promise((resolve, reject)=>{
  	resolve("成功");
  	//reject("失败");
  }).then(msg=>{
  	console.log(msg);
  },error=>{
  	console.log(error);
  })
  ```

  另外，调用`reject()`也会抛出错误。期约的状态只能改变一次，

```javascript
let p = new Promise((resolve,reject)=>{
    resolve();
    reject();//没有效果
})
```

通过调用`Promise.resolve()`静态方法，可以实例化一个解决的期约，这个解决的期约的值等于传给`Promise.resolve(msg)`的第一个参数（`msg`）,多余的参数会忽略。

```javascript
setTimeout(console.log, 0, Promise.resolve());
// Promise <resolved>:undefined

setTimeout(console.log, 0, Promise.resolve(3));
//Promise {<fulfilled>: 3}

setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
//Promise {<fulfilled>: 4}
```

通过调用`Promise.reject()`静态方法，可以实例化一个拒绝的期约，并抛出一个异常错误（这个错误不能通过try/catch捕获，只能通过拒绝处理程序捕获）。

```javascript
try {
         Promise.reject("123");
     } catch (error) {
         console.log(error);
     }//Uncaught (in promise) 123


Promise.reject("123").then(null, error => {
    console.log(error);
})//123
```

### 创建`Promise`

`Promise` 对象是由关键字 `new` 及其构造函数来创建的。该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——`resolve` 和 `reject` ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 `resolve` 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用`reject` 函数。

### `Promise`的链式调用

`Promise.prototype.then()`返回一个新的期约实例

```javascript
let p1 = Promise.resolve('foo');
let p2 = p1.then();
console.log(p2)// Promise {<fulfilled>: foo}

let p3 = p1.then(()=>{undefined});
// Promise {<fulfilled>: undefined}
let p4 = p1.then(()=>{});
// Promise {<fulfilled>: undefined}
let p5 = p1.then(()=>{Promise.resolve()});
// Promise {<fulfilled>: undefined}

let p6 = p1.then(()=>"bar");
// Promise {<fulfilled>: bar}
let p7 = p1.then(()=>Promise.resolve("bar"));
// Promise {<fulfilled>: bar}
let p8 = p1.then(()=>new Promise(()=>{}));
// Promise {<pending>: }
let p9 = p1.then(()=>{Promise.reject()});
// Uncaught (in promise):undefined
let p10 = p1.then(()=>{throw 'ba';});
// Uncaught (in promise):ba
let p11= p1.then(()=>{Error('qux')});
// Promise {<fulfilled>: Erro:qux}
```

![链式调用](E:\WEB-DailyStudy2021Running\JavaScript\ES6\期约与异步函数\promises.png)

`Promise.prototype.catch()`给期约添加拒绝处理程序，只接收一个参数。返回一个新的期约实例：

```javascript
let p1 = new Promise(()=>{});
let p2 = p1.catch();
```

`Promise.prototype.finally()`添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)

### 期约连锁

```javascript
let p1 = new Promise((resolve, reject)=>{
        console.log('p1 executor');
        setTimeout(resolve, 1000);
    });
    p1.then(()=>new Promise((resolve, reject)=>{
        console.log('p2 executor');
        setTimeout(resolve, 1000);
    })).then(()=>new Promise((resolve,reject)=>{
        console.log('p3 executor');
        setTimeout(resolve, 1000);
    })).then(()=>new Promise((resolve,reject)=>{
        console.log('p4 executor');
        setTimeout(resolve, 1000);
    }));
```

```javascript
//把生成期约的代码提取到一个工厂函数中
function delayedResolve(str){
    return new Promise((resolve, reject)=>{
        console.log(str);
        setTimeout(resolve, 1000);
    });
}

delayedResolve('p1 executor')
	.then(()=>delayedResolve('p2 executor'))
	.then(()=>delayedResolve('p3 executor'))
	.then(()=>delayedResolve('p4 executor'))
```

```javascript
let p = new Promise((resolve, reject)=>{
    console.log('initial promise rejects');
    reject();
});
p.catch(()=>console.log('reject handler'))
	.then(()=>console.log('resolve handler'))
	.finally(()=>console.log('finally handler'));
```

### `Promise.all()`

该静态方法创建的期约会在一组期约全部解决后再解决。接收一个可迭代对象，返回一个新期约：

```javascript
let p1 = promise.all([
    Promise.resolve(),
    Promise.resolve()
])
```

可迭代对象中的元素通过`Promise.resolve()`转换为期约

```javascript
let p2 = Promise.all([3, 4]);
```

空的可迭代对象等价于`Promise.resolve()`

```javascript
let p3 = Promise.all([]);

let p3 = Promise.all();//这是无效的语法
```

期约合成：

```javascript
let p = Promise.all([
        Promise.resolve(),
        new Promise((resolve, reject)=>setTimeout(resolve, 1000))
    ]);
    setTimeout(console.log, 0, p); //pending...
    p.then(()=>setTimeout(console.log, 0, 'all() resolved!'))
```

如果至少有一个包含的期约等待，则合成的期约也会等待。如果有一个包含的期约拒绝，则合成期约也会拒绝。

如果有期约拒绝，则第一个拒绝的期约会将自己的理由作为合成期约的拒绝理由。之后再拒绝的期约不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。合成的期约会静默处理所有包含期约的拒绝操作。

### `Promise.race()`

该静态方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像，接收一个可迭代对象，返回一个新期约。

```javascript
let p1 = Promise.race([
        Promise.resolve(),
        Promise.resolve()
   ]);
```

可迭代对象中的元素会通过`Promise.resolve()`转换为期约

```javascript
let p2 = Promise.race([3, 4]);
```

空的可迭代对象等价于`new Promise(()=>{})`

```javascript
let p3 = Promise.race([]);

let p4 = Promise.race();//无效的语法
```

`Promise.race()`不会对解决或拒绝的期约区别对待。无论是解决还是拒绝，只要是第一个落定的期约，`Promise.race()`就会包装其解决值或拒绝理由并返回新期约：

如果有一个期约拒绝，只要它是第一个落定的，就会成为拒绝合成期约的理由。之后再拒绝的期约不会影响最终期约的拒绝理由。不过，这并不影响所有包含期约正常的拒绝操作。与`Promise.all()`类似，会静默处理所有包含期约的拒绝操作。

### `异步函数async`

