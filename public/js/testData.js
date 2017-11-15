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
smallTable.push( new Entry( 1, "1 apple") )
smallTable.push( new Entry(2, " 2 orange") )
smallTable.push( new Entry(4, " 40  banana bunch") )
smallTable.push( new Entry(1, "1 peach") )

const encounterChances = []
encounterChances.push( new Entry( 12, "No Encounter") )
encounterChances.push( new Entry( 3, "LocationEncounter", locationEncounters) )
encounterChances.push( new Entry( 2, "Creature Encounter", creatureEncounters) )
encounterChances.push( new Entry( 3, "Both", [locationEncounters, creatureEncounters]) )

