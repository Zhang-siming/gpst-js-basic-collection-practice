'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   let str=[];
 let j=0;
let p;
 for(let i=0;i<collection.length;i++){
      if(i==collection.indexOf(collection[i]))
      { str[j]={ key:collection[i], count:1}
        j++;
      }

 else{  str[j-1].count++;
        }
} 

let array=[];
  array=objectB.value;


 for(let x=0;x<array.length;x++)
  for(let y=0;y<str.length;y++)
      if(array[x]==str[y].key)
              {p=str[y].count;
          str[y].count=p-parseInt(p/3);}


    return str;
}
