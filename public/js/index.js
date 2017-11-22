let currentTable = encounterChances

document.addEventListener( "DOMContentLoaded", function(event) {
  let table1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
  let rollButton = document.getElementById('rollButton')
  let results = document.getElementById('result')
  buildTable( currentTable, table1 )
  rollButton.addEventListener('click', () => {
    let roll = rollTable(currentTable)
    results.innerText = roll.text
  })
})

const buildTable = function ( array, htmlTable ){
  array.forEach( ( item ) => {
    let newRow = htmlTable.insertRow(htmlTable.rows.length)
    let weightCell = newRow.insertCell(0)
    let textCell = newRow.insertCell(1)
    weightCell.innerText = item.probability
    textCell.innerText = item.text
    if (item.subTable) {
      textCell.innerText += '  --->'
    }
  })
}