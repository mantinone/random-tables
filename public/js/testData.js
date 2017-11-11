class Entry {
  constructor (probability, text = "no text provided", subTable = null ){
    this.probability = probability
    this.text = text
    this.subTable = subTable
  }
}

const locationEncounters = []

const creatureEncounters = []

const smallTable = []
smallTable.push( new Entry( 1, "A weight 1 apple") )
smallTable.push( new Entry(2, "A weight 2 orange") )
smallTable.push( new Entry(2, "A weight 2 banana bunch") )
smallTable.push( new Entry(1, "A weight 1 peach") )

const encounterChances = []
encounterChances.push( new Entry( 12, "No Encounter") )
encounterChances.push( new Entry( 3, "LocationEncounter", locationEncounters) )
encounterChances.push( new Entry( 2, "No Encounter", creatureEncounters) )
encounterChances.push( new Entry( 3, "No Encounter", [locationEncounters, creatureEncounters]) )

