const rollTable = function( table ) {
  let probabilitySum = 0
  let cdfTable = table.map( ( entry ) => probabilitySum += entry.probability )
  return cdfTable
}

console.log(rollTable(smallTable));
console.log(rollTable(encounterChances));

document.addEventListener( "DOMContentLoaded", function(event) {
  console.log('Dom content loaded worked');
})