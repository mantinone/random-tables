let currentTable = encounterChances

document.addEventListener( "DOMContentLoaded", function(event) {
  let table1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
  let rollButton = document.getElementById('rollButton')
  buildTable( currentTable, table1 )
  let resultsLabel = document.getElementById('result')
  rollButton.addEventListener('click', () => {
    resultsLabel.innerText = buttonClick(currentTable)
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
    let newRow = htmlTable.insertRow(htmlTable.rows.length)
    let weightCell = newRow.insertCell(0)
    let textCell = newRow.insertCell(1)
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
  const subTable = currentTable[index].subTable
  let container = document.getElementsByClassName('tableContainer')[0]
  let newTable = document.createElement("table")
  buildTable( subTable, newTable )
  container.appendChild(newTable)
}