//filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const resultArray = words.filter((word) => word.length > 6);
console.log(resultArray);


//过滤无效条目
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

arr.filter((c)=>{
  if (c.id != undefined && typeof (c.id) === 'number' && !isNaN(c.id) && c.id !== 0){
    return true;
  }
  return false;
});


//搜索
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query){
  return fruits.filter((c)=>{
    return c.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
  })
}