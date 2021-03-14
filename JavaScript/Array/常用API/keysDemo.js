// keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

const array1 = ['a', 'b', 'c'];
const iterater = array1.keys();
for (const i of iterater ) {
  console.log(i);
}