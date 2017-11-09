'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];

    for(let i=0;i<collectionA.length;i++)
        if(collectionB.indexOf(collectionA[i])>-1)
                result.push(collectionA[i]);

   
    
    return result;
}
