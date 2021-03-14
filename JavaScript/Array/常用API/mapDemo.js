//map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array1 = [1,2,3,4,5];
const arr = array1.map(x=>x*2);
console.log(arr);

//求数组中每个元素的平方根
var numbers = [1, 4, 9];
var root = numbers.map(Math.sqrt);

//使用map格式化数组中的对象
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
var reformattedArray = kvArray.map((element)=>{
  var reArray = {};
  reArray[element.key] = element.value;
  return reArray;
});
