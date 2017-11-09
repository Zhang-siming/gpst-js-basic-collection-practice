'use strict';

module.exports = function countSameElements(collection) {
  let str=[];
  let j=0;

  for(let i=0;i<collection.length;i++)
  {
      if(i==collection.indexOf(collection[i]))
      { str[j]={ key:collection[i], count:1}
        j++;
      }
      else str[j-1].count++;
  } 
  return str;  
}
