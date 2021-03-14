//forEach() 方法对数组的每个元素执行一次给定的函数。
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const array1 = ['a', 'b', 'c'];
array1.forEach((element, index, array) => {
  console.log('a['+index+']='+element);
});

//如果数组在迭代过程中被修改了，有的元素会被跳过
var words = ['one', 'two', 'three', 'four'];
words.forEach((word)=>{
  console.log(word);
  if (word === 'two') {
    words.shift();
  }
});//// one two four