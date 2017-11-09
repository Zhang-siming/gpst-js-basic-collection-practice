'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let array=[];
  array=objectB.value;
let p;

 for(let x=0;x<array.length;x++)
  for(let y=0;y<collectionA.length;y++)
      if(array[x]==collectionA[y].key)
        {p=collectionA[y].count;
          collectionA[y].count=p-parseInt(p/3);}

    return collectionA; 
}
