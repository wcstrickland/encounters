// cr .25
const Acolyte = 50
const Axe_Beak = 50
const Blink_Dog = 50
const Boar = 50
const Constrictor_Snake = 50
const Draft_Horse = 50
const Dretch = 50
const Elf = 50
const Elk = 50
const Flying_Sword = 50
const Giant_Badger = 50
const Giant_Bat = 50
const Giant_Centipede = 50
const Giant_Frog = 50
const Giant_Lizard = 50
const Giant_Owl = 50
const Giant_Poisonous_Snake = 50
const Giant_Wolf_Spider = 50
const Goblin = 50
const Grimlock = 50
const Panther = 50
const Pseudodragon = 50
const Riding_Horse = 50
const Skeleton = 50
const Sprite = 50
const Steam_Mephit = 50
const Swarm_of_Bats = 50
const Swarm_of_Rats = 50
const Swarm_of_Ravens = 50
const Violet_Fungus = 50
const Wolf = 50
const Zombie = 50




// cr .5
const Ape = 100
const Black_bear = 100
const Cockatrice = 100
const Crocodile = 100
const Darkmantle = 100
const Dust_Mephit = 100
const Giant_Goat = 100
const Giant_Sea_Horse = 100
const Giant_Wasp = 100
const Gnoll = 100
const Gnome = 100
const Gray_Ooze = 100
const Hobgoblin = 100
const Ice_Mephit = 100
const Lizardfolk = 100
const Magma_Mephit = 100
const Magmin = 100
const Orc = 100
const Reef_Shark = 100
const Rust_Monster = 100
const Sahuagin = 100
const Satyr = 100
const Scout = 100
const Shadow = 100
const Swarm_of_Insects = 100
const Thug = 100
const Warhorse = 100
const Warhorse_Skeleton = 100
const Worg = 100

// cr 1
const Animated_Armor = 200
const Brass_Dragon_Wyrmling = 200
const Brown_Bear = 200
const Bugbear = 200
const Copper_Dragon_Wyrmling = 200
const Death_Dog = 200
const Dire_Wolf = 200
const Dryad = 200
const Duergar = 200
const Ghoul = 200
const Giant_Eagle = 200
const Giant_Hyena = 200
const Giant_Octopus = 200
const Giant_Spider = 200
const Giant_Toad = 200
const Giant_Vulture = 200
const Harpy = 200
const Hippogriff = 200
const Imp = 200
const Lion = 200
const Quasit = 200
const Specter = 200
const Spy = 200
const Swarm_of_Quippers = 200
const Tiger = 200

const difficultyChart = {
    1: {
        25: "easy",
        50: "medium",
        75: "hard",
        100: "deadly"
    },
    2: {
        50: "easy",
        100: "medium",
        150: "hard",
        200: "deadly"
    },
    3: {
        75: "easy",
        150: "medium",
        225: "hard",
        400: "deadly"
    },
    4: {
        125: "easy",
        250: "medium",
        375: "hard",
        500: "deadly"
    },
    5: {
        250: "easy",
        500: "medium",
        750: "hard",
        1100: "deadly"
    },
    6: {
        300: "easy",
        600: "medium",
        900: "hard",
        1400: "deadly"
    },
    7: {
        350: "easy",
        750: "medium",
        1100: "hard",
        1700: "deadly"
    },
    8: {
        450: "easy",
        900: "medium",
        1400: "hard",
        2100: "deadly"
    },
    9: {
        550: "easy",
        1100: "medium",
        1600: "hard",
        2400: "deadly"
    },
    10: {
        600: "easy",
        1200: "medium",
        1900: "hard",
        2800: "deadly"
    },
}

function difficulty(numCharacters, lvlCharacters, arrayOfMonsters) {
    totalXp = arrayOfMonsters.reduce((accum, cur) => accum + cur)
    modifier = 0
    modifiers = {
        1: 1,
        2: 1.5,
        3: 2,
        4: 2.5,
        5: 3,
        6: 4
    }
    numOfMonsters = arrayOfMonsters.length
    if (numOfMonsters == 1) {
        modifier = 1
    } else if (numOfMonsters == 2) {
        modifier = 2
    } else if (2 < numOfMonsters < 7) {
        modifier = 3
    } else if (6 < numOfMonsters < 11) {
        modifier = 4
    } else if (10 < numOfMonsters < 15) {
        modifier = 5
    } else {
        modifier = 6
    }

    if (numCharacters < 3) {
        modifier -= 1
    }
    if (numCharacters > 5) {
        modifier += 1
    }
    adjustedXp = modifiers[modifier] * totalXp
    adjustedXpPerChar = adjustedXp / numCharacters
    console.log(difficultyChart[lvlCharacters])
    console.log(`difficulty rating per character = ${adjustedXpPerChar}`)
}

difficulty(5, 4, [Tiger, Tiger, Worg, Lion])