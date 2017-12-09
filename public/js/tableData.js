class Entry {
  constructor (probability, text = "no text provided", subTable = null ){
    this.probability = probability
    this.text = text
    this.subTable = subTable
  }
}

class Multi {
  constructor ( text = 'no text provided', subTable = null ){
    this.text = text
    this.subTable = subTable
  }
}

const graveyardEncounters = []
graveyardEncounters.push( new Entry( 7, "No Encounter"))
graveyardEncounters.push( new Entry( 2, "3d4 Skeletons"))
graveyardEncounters.push( new Entry( 1, "1d3 Ogre Zombies"))

const weirdPlants = []
weirdPlants.push( new Entry( 1, "Laugh Apple tree" ))
weirdPlants.push( new Entry( 1, "Torch Fungus" ))
weirdPlants.push( new Entry( 1, "Witchwort" ))
weirdPlants.push( new Entry( 1, "Schnozzberries" ))
weirdPlants.push( new Entry( 1, "Hot Peppers" ))

const cavernEntrances = []
cavernEntrances.push( new Entry( 1, "Guarded by 1d4 Animated Armors" ))
cavernEntrances.push( new Entry( 1, "Entrance hidden under an out-of-place rock" ))
cavernEntrances.push( new Entry( 1, "Entrance hidden by a fake tree" ))
cavernEntrances.push( new Entry( 1, "Entrance up a cliff, requires climbing" ))
cavernEntrances.push( new Entry( 1, "Entrance is trapped" ))

const cavernInterior = []
cavernInterior.push( new Entry( 3, "A supply cache containing rations and simple tools"))
cavernInterior.push( new Entry( 1, "A lone cow, which can be heard mooing from outside"))
cavernInterior.push( new Entry( 1, "An old hermit woman selling potions"))
cavernInterior.push( new Entry( 2, "Some refugees hiding out"))
cavernInterior.push( new Entry( 1, "An unusually friendly orc makes his home here"))
cavernInterior.push( new Entry( 1, "An apparently empty cave contains 1d4 Dark Mantles"))
cavernInterior.push( new Entry( 1, "A treasure chest containing 3d100 gold pieces"))

const ambushers = []
ambushers.push( new Entry( 1, "3d4 orcs sneak up on the players" ))
ambushers.push( new Entry( 1, "4d4 goblins patrolling territory" ))
ambushers.push( new Entry( 1, "A Bulette" ))

const wpcommanders = []
wpcommanders.push( new Entry( 2, "Orc War Chief"))
wpcommanders.push( new Entry( 2, "Hobgoblin War Chief"))
wpcommanders.push( new Entry( 1, "Human Wizard"))

const wpsoldiers = []
wpsoldiers.push( new Entry( 2, "3d6 Orcs"))
wpsoldiers.push( new Entry( 2, "3d6 Goblins"))
wpsoldiers.push( new Entry( 1, "3d6 Hobgoblins"))

const wpmounts = []
wpmounts.push( new Entry( 2, "1d3 Horses"))
wpmounts.push( new Entry( 2, "1d4 Worgs"))
wpmounts.push( new Entry( 1, "1d2 Girffons"))
wpmounts.push( new Entry( 1, "1 Tamed Bulette"))
wpmounts.push( new Entry( 5, "No Mounts"))

const warParties = [ new Multi( 'Commander', wpcommanders), new Multi('Soldiers', wpsoldiers), new Multi('1d4-1 Mounts', wpmounts)]

const scouts = []
scouts.push( new Entry( 1, '1d2 Bugbear Spies'))
scouts.push( new Entry( 1, '1 Drow'))
scouts.push( new Entry( 1, 'A dog named Scout'))

const creatureEncounters = []
creatureEncounters.push( new Entry( 2, 'Ambushers', ambushers ))
creatureEncounters.push( new Entry( 3, 'Enemy War Party', warParties ))
creatureEncounters.push( new Entry( 1, 'Manticore' ))
creatureEncounters.push( new Entry( 1, 'Unicorn' ))
creatureEncounters.push( new Entry( 1, 'Fizzy Soda Jelly' ))
creatureEncounters.push( new Entry( 2, 'Human Bandits' ))
creatureEncounters.push( new Entry( 1, 'Scouts', scouts ))

const terrainEncounters = []
terrainEncounters.push( new Entry( 1, "Cursed graveyard", graveyardEncounters) )
terrainEncounters.push( new Entry( 1, "Climbing Challenge") )
terrainEncounters.push( new Entry( 1, "Magical stones") )
terrainEncounters.push( new Entry( 2, "Weird plant life", weirdPlants) )
terrainEncounters.push( new Entry( 1, "Stream Crossing") )
terrainEncounters.push( new Entry( 1, "Sheltered cave") )
terrainEncounters.push( new Entry( 4, "Mysterious Cavern", [new Multi( 'Cave Entrances', cavernEntrances), new Multi( 'Cave Interior', cavernInterior)] ) )

const encounterChances = []
encounterChances.push( new Entry( 12, "No Encounter") )
encounterChances.push( new Entry( 2, "Terrain Encounters", terrainEncounters) )
encounterChances.push( new Entry( 2, "Creature Encounter", creatureEncounters) )
encounterChances.push( new Entry( 3, "Both", [new Multi( 'Location Encounters', terrainEncounters), new Multi( 'Creature Encounters', creatureEncounters)]) )

