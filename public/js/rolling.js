const rollTable = function( table ) {
  let probabilitySum = 0
  let cdfTable = table.map( ( entry ) => probabilitySum += entry.probability )
  let index = searchTable( cdfTable, randomRange(cdfTable[cdfTable.length-1]))
  return table[index]
}

const randomRange = function ( max, min=1 ){
  let size = max - min
  return Math.floor( Math.random()*(size + 1) ) + min
}

const searchTable = function ( table, roll ){
  let found = false
  let leftIndex = 0
  let rightIndex = table.length-1
  let middleIndex = 0
  while( !found ){
    middleIndex = Math.floor((rightIndex-leftIndex)/2 + leftIndex)
    if( roll === table[middleIndex]){
      found = true
    }else if( roll < table[middleIndex]){
      if ( !(roll <= table[middleIndex-1])){
        found = true
      } else {
        rightIndex = middleIndex
      }
    }else {
      if( middleIndex >= table.length-1 ){
        console.log('Roll outside range of table');
        found = true
      }
      leftIndex = middleIndex+1
    }
  }
  return middleIndex
}