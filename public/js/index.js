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

//Function for rolling on table when the roll button is clicked. Rename?
const buttonClick = function ( table ) {
  //Get results html element and clear it
  let resultsLabel = document.getElementById('result')
  let resultText = ''
  //Roll and format text
  let roll = rollTable(table)
  resultText += roll.text
  if ( roll.subTable ) {
    resultText += ' -> '
    if( roll.subTable[0] instanceof Entry ){
      resultText += buttonClick( roll.subTable )
    } else {
      roll.subTable.forEach( ( table ) => {
        resultText += '('
        resultText += buttonClick( table.subTable )
        resultText += ')'  })
    }
  }
  return resultText
}

//Takes an array and an empty html table, then builds the table from the array
const buildTable = function ( array, htmlTable ){
  array.forEach( ( item ) => {
    let [newRow, weightCell, textCell ] = insertRow( htmlTable )
    weightCell.innerText = item.probability || ''
    textCell.innerText = item.text
    if (item.subTable) {
      textCell.innerText += '  --->'
      newRow.addEventListener( 'click', subTable )
    }
  })
}

//Click on a table entry with a sub table and this will display the sub table
const subTable = function ( event ){
  const currentPosition = event.target.parentNode.parentNode.parentNode.parentNode.dataset.number
  removeUpstreamTables( currentPosition )
  displayNumber = parseInt(currentPosition) + 1
  //Set up variables
  const index = event.target.parentNode.rowIndex - 1
  const parentTableName = event.target.parentNode.parentNode.parentNode.dataset.tableName
  const subTable = displayedTables[parentTableName][index].subTable
  const subTableName = `subTable${displayNumber}`
  //Add stuff to the display object and create elements
  displayedTables[subTableName] = subTable
  let newDiv = document.createElement("div")
  let newButton = makeHideButton()
  let newTable = document.createElement("table")
  //set up elements
  newDiv.dataset.number = `${displayNumber}`
  newTable.dataset.tableName = `${subTableName}`
  insertRow( newTable )
  //build the table
  buildTable( subTable, newTable )
  let container = document.getElementsByClassName('tableContainer')[0]
  newDiv.appendChild(newButton)
  newDiv.appendChild(newTable)
  container.appendChild(newDiv)
}

//Inserts rows into a table
const insertRow = function ( table ) {
  let newRow = table.insertRow(table.rows.length)
  let weightCell = newRow.insertCell(0)
  let textCell = newRow.insertCell(1)
  return [ newRow, weightCell, textCell ]
}

//Deletes a sub-table from the UI when you click its hide button.
const hideTable = function ( event ) {
  const currentPosition = event.target.parentNode.dataset.number
  removeUpstreamTables( currentPosition - 1)
  displayNumber = currentPosition - 1
}
//Utility for removing all tables upstream
const removeUpstreamTables = function ( position ) {
  const container = document.getElementsByClassName('tableContainer')[0]
  const nodeList = container.childNodes

  for( let i = nodeList.length - 1; i > 0; i-- ){
    if( nodeList[i].dataset ) {
      if( nodeList[i].dataset.number > position ){
        container.removeChild( nodeList[i] )
      }
    }
  }
}

const makeHideButton = function () {
  let newButton = document.createElement('button')
  newButton.addEventListener( 'click', hideTable )
  newButton.innerText = "Hide Table"
  return newButton
}