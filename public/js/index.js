const rollTable = function( table ) {
  let probabilitySum = 0
  let cdfTable = table.map( ( entry ) => probabilitySum += entry.probability )
  return cdfTable
}

const randomRange = function ( max, min=1 ){
  let size = max - min
  return Math.floor( Math.random()*(size + 1) ) + min
}

document.addEventListener( "DOMContentLoaded", function(event) {
  console.log('Dom content loaded worked');
})