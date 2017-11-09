'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let A=[];
  let B=[];

  for(let j=0;j<collectionA.length;j++)
      A.push(collectionA[j].key);

  B=objectB.value;

  let result=[];

    for(let i=0;i<A.length;i++)
        if(B.indexOf(A[i])>-1)
                result.push(A[i]);

   
    
    return result;
}
