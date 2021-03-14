//reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//数组所有值求和
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);

[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue
}, 10);//20

//累加数组中的值
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((accumulator, currentValue) => 
  { return accumulator + currentValue.x}
  ,initialValue
);

//二维数组转换为一维数组
var array2 = [[1, 2], [3, 4], [5, 6],[7, 8]];
var array1 = array2.reduce((prev, curr)=>prev.concat(curr),[]);
console.log(array1);

//计算数组中每个值出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var num = names.reduce((accumulator, currentValue)=>{
  // console.log(accumulator);
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue]=1;
  }
  return accumulator;
}, {});
console.log(num);

//按属性对object分类
var people = [
  { name: 'Alice', age: 21, sex: '男' },
  { name: 'Max', age: 20, sex: '男'},
  { name: 'Jane', age: 20, sex: '女'}
];

function groupByProp(arrays, prop){
  return arrays.reduce((prev, curr)=>{
    console.log(prev);
    console.log(curr);
    var key = curr[prop];
    console.log(key);
    if (!prev[key]) {
      prev[key] = [];
    }
    prev[key].push(curr);
    return prev;
  },{});
}
var groupedPeople = groupByProp(people, 'age');
console.log(groupedPeople);

//使用扩展运算符和initialValue绑定包含在对象数组中的数组
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
var allbooks = friends.reduce(function (prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);
console.log(allbooks);

//数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce((accumulator, currentValue) =>{
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])
console.log(myOrderedArray)

//使用 reduce实现map
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}