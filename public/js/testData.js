class Entry {
  constructor (probability, text = "no text provided", subTable = null ){
    this.probability = probability
    this.text = text
    this.subTable = subTable
  }
}

const environmentLocations = []
environmentLocations.push( new Entry( 1, 'Ruined Wagon / Gnarled Tree with cool stuff / Chasm with bridge'))
environmentLocations.push( new Entry( 1, "Farmer's field / Bramble Path / Mining Ruins"))
environmentLocations.push( new Entry( 1, "Holes Everywhere / Lost Woods Loop / Magic Ice Crystals"))

const caveShops = []
caveShops.push( new Entry( 1, 'Potion shop'))
caveShops.push( new Entry( 1, 'Food and Ammo shop'))
caveShops.push( new Entry( 1, 'Gambling game'))
caveShops.push( new Entry( 1, 'Foraged shop'))
caveShops.push( new Entry( 1, 'Rare material shop'))
caveShops.push( new Entry( 1, 'Spooky Shop (buy and sell rare magic items)'))

const caveEncounters = []
caveEncounters.push( new Entry( 1, 'Cow alone in cave, can be heard mooing from outside'))
caveEncounters.push( new Entry( 1, 'Empty Cave, safe rest.  Weird dreams.'))
caveEncounters.push( new Entry( 1, 'Rupee ore.  4d100 rupees.'))
caveEncounters.push( new Entry( 1, 'Cache of food and equipment'))
caveEncounters.push( new Entry( 1, 'A family of Beastkin'))
caveEncounters.push( new Entry( 1, 'Weirdo shop', caveShops ))
caveEncounters.push( new Entry( 1, 'Gremlins or Khosslings hiding out (secret to everyone)'))
caveEncounters.push( new Entry( 1, 'Hermit asks to repay for door.  May have info'))
caveEncounters.push( new Entry( 1, 'Human refugees hiding out'))
caveEncounters.push( new Entry( 2, 'Lanor and Pav - can become bomb shop'))
caveEncounters.push( new Entry( 1, 'Fairy fountain'))

const caveEntrances = []
caveEntrances.push( new Entry( 1, 'Concealed by large rock'))
caveEntrances.push( new Entry( 1, 'Concealed by foliage'))
caveEntrances.push( new Entry( 1, 'Magic flammable tree'))
caveEntrances.push( new Entry( 1, 'Protected by armos'))
caveEntrances.push( new Entry( 1, 'Hidden door switch'))
caveEntrances.push( new Entry( 1, 'Part of a spirit shrine'))
caveEntrances.push( new Entry( 1, 'Entrance is trapped'))
caveEntrances.push( new Entry( 1, 'Climbing up a cliff wall'))

const weirdFlora = []
weirdFlora.push( new Entry( 1, "Laugh-Apple tree"))
weirdFlora.push( new Entry( 1, "Goodberry bushes"))

const cabins = []
cabins.push( new Entry( 1, "A witch's hut"))
cabins.push( new Entry( 1, "Half-fey cabin"))
cabins.push( new Entry( 1, "Ordinary family lives safely"))
cabins.push( new Entry( 1, "Monsters camping out"))
cabins.push( new Entry( 1, "Ruined cabin"))
cabins.push( new Entry( 1, "No one is home"))

const locationEncounters = []
locationEncounters.push( new Entry( 3, 'Environment Specific', environmentLocations))
locationEncounters.push( new Entry( 5, 'Cave Encounter', [caveEntrances, caveEncounters]))
locationEncounters.push( new Entry( 2, 'Weird Flora', weirdFlora))
locationEncounters.push( new Entry( 1, 'Watering Hole'))
locationEncounters.push( new Entry( 1, 'Big rock or cliff'))
locationEncounters.push( new Entry( 2, 'Spirit Shrine'))
locationEncounters.push( new Entry( 1, 'Circle Door'))
locationEncounters.push( new Entry( 1, 'Cool Ruins'))
locationEncounters.push( new Entry( 1, 'Cottage or cabin', cabins))
locationEncounters.push( new Entry( 2, 'Spiritual Disturbance'))
locationEncounters.push( new Entry( 1, 'Quake'))

const warPartyLocation = []
warPartyLocation.push( new Entry( 2, "Traveling") )
warPartyLocation.push( new Entry( 1, "Camping") )

const warPartyCommander = []
warPartyCommander.push( new Entry( 1, "Iibro war chief") )
warPartyCommander.push( new Entry( 1, "Wayriez") )
warPartyCommander.push( new Entry( 1, "Bull Khossling") )

const warPartySoldiers = []
warPartySoldiers.push( new Entry( 1, "2d6 Iibrosi") )
warPartySoldiers.push( new Entry( 1, "2d6 Khosslings") )
warPartySoldiers.push( new Entry( 1, "4d6 Gremlins") )
warPartySoldiers.push( new Entry( 1, "2d6 Bull Khosslings") )

const warPartyMounts = []
warPartyMounts.push( new Entry( 2, "1d4-1 Horses") )
warPartyMounts.push( new Entry( 2, "1d4-1 Worgs") )
warPartyMounts.push( new Entry( 2, "1d4-1 Giant Boars") )
warPartyMounts.push( new Entry( 1, "1d4-1 Griffins") )
warPartyMounts.push( new Entry( 1, "1d4-1 Manticores") )

const warParty = [ warPartyLocation, warPartyCommander, warPartySoldiers, warPartyMounts]

const wildlife = []
wildlife.push( new Entry( 1, "Bears") )
wildlife.push( new Entry( 1, "Elk") )
wildlife.push( new Entry( 1, "Goats") )
wildlife.push( new Entry( 1, "Wolves") )
wildlife.push( new Entry( 1, "Boars") )

const criphonans = []
criphonans.push( new Entry( 1, "Castle Patrol") )
criphonans.push( new Entry( 1, "Lone Soldier") )
criphonans.push( new Entry( 1, "Wizard or Cleric") )
criphonans.push( new Entry( 1, "Escaped Prisoners") )
criphonans.push( new Entry( 1, "Escaped Kids") )
criphonans.push( new Entry( 1, "rat/ badger/ otter/ carp") )
criphonans.push( new Entry( 1, "cat/ sparrow/ turtle/ monkey") )
criphonans.push( new Entry( 1, "dog/ fox/ crane/ rabbit") )

const otherMonsters = []
otherMonsters.push( new Entry( 1, "Like-like") )
otherMonsters.push( new Entry( 1, "Red Cap") )
otherMonsters.push( new Entry( 1, "Stalfos and Zombies") )
otherMonsters.push( new Entry( 1, "Ankhegg") )
otherMonsters.push( new Entry( 1, "Rocktapus") )
otherMonsters.push( new Entry( 1, "Pehats") )
otherMonsters.push( new Entry( 1, "Pehats") )
otherMonsters.push( new Entry( 1, "Faerie Dragon/ Magic Beast/ Yeti/ Eye Thing") )
otherMonsters.push( new Entry( 1, "Owlbear/ Keese/ Paryton/ Dark Mantle") )
otherMonsters.push( new Entry( 1, "Will o' Wisp/ Water Weird/ Manticore/ Roper") )


const creatureEncounters = []
creatureEncounters.push( new Entry( 4, "Monster war party", warParty) )
creatureEncounters.push( new Entry( 2, "Wildlife", wildlife) )
creatureEncounters.push( new Entry( 3, "Criphonans", criphonans) )
creatureEncounters.push( new Entry( 3, "Monsters!", otherMonsters) )
creatureEncounters.push( new Entry( 2, "Changeling Caravan") )
creatureEncounters.push( new Entry( 1, "Shadow creaturs on a mission") )
creatureEncounters.push( new Entry( 1, "Wild Spirit Creature") )
creatureEncounters.push( new Entry( 1, "Group of Armos") )
creatureEncounters.push( new Entry( 1, "Stalked by dragon") )
creatureEncounters.push( new Entry( 1, "Hunting Cassar") )
creatureEncounters.push( new Entry( 1, "Creature Lair") )


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

