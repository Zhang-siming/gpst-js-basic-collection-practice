'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   function flatten(arry){
      return arry.reduce(function(result,item){
         return result.concat(Array.isArray(item)?flatten(item):item);
      } ,[]);}//reduce函数累加器，concat连接元素并返回新数组，Array.isArray判断是否为数组,

      let result_1=flatten(collectionA);
      let result_2=flatten(collectionB);
      
       let result=[];
       for(let i=0;i<result_1.length;i++)
        if(result_2.indexOf(collectionA[i])>-1)
                result.push(collectionA[i]);


  return result;
}
