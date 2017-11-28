//let displayedTables.currentTable = encounterChances
let displayedTables = { currentTable: encounterChances }
let displayNumber = 1

document.addEventListener( "DOMContentLoaded", function(event) {
  let table1 = document.getElementById('table1');
  table1.dataset.tableName = "currentTable"
  let rollButton = document.getElementById('rollButton')
  buildTable( displayedTables.currentTable, table1 )
  let resultsLabel = document.getElementById('result')
  rollButton.addEventListener('click', () => {
    resultsLabel.innerText = buttonClick(displayedTables.currentTable)
  })
})

const buttonClick = function ( table ) {
  let resultsLabel = document.getElementById('result')
  let resultText = ''
  let roll = rollTable(table)
  resultText += roll.text
  if ( roll.subTable ) {
    resultText += ' -> '
    if( roll.subTable[0] instanceof Entry ){
      resultText += buttonClick( roll.subTable )
    } else {
      roll.subTable.forEach( ( table ) => {
        resultText += '('
        resultText += buttonClick( table )
        resultText += ')'  })
    }
  }
  return resultText
}

const buildTable = function ( array, htmlTable ){
  array.forEach( ( item ) => {
    let [newRow, weightCell, textCell ] = insertRow( htmlTable )
    weightCell.innerText = item.probability
    textCell.innerText = item.text
    if (item.subTable) {
      textCell.innerText += '  --->'
      newRow.addEventListener( 'click', subTable )
    }
  })
}

const subTable = function ( event ){
  const index = event.target.parentNode.rowIndex - 1
  const parentTableName = event.target.parentNode.parentNode.parentNode.dataset.tableName
  const subTable = displayedTables[parentTableName][index].subTable
  const subTableName = `subTable${displayNumber}`
  displayedTables[subTableName] = subTable
  console.log('displayedTables', displayedTables);
  let container = document.getElementsByClassName('tableContainer')[0]
  let newTable = document.createElement("table")
  newTable.dataset.tableName = `${subTableName}`
  insertRow( newTable )
  buildTable( subTable, newTable )
  container.appendChild(newTable)
}

const insertRow = function ( table ) {
  let newRow = table.insertRow(table.rows.length)
  let weightCell = newRow.insertCell(0)
  let textCell = newRow.insertCell(1)
  return [ newRow, weightCell, textCell ]
}