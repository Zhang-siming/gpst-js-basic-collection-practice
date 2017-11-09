'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let array=[];
  array=objectB.value;


 for(let x=0;x<array.length;x++)
  for(let y=0;y<collectionA.length;y++)
      if(array[x]==collectionA[y].key)
        collectionA[y].count--;

    return collectionA;    
}
