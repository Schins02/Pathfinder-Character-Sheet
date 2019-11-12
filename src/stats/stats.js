import weapons from './weapons.js';

 var state = {
    //currentWeapon: weapons[0],

    topLevelStats: {
      name: "Gorath",
      alignment: "Chaotic Evil",
      level: 4,
      size: 'M',
      // Human speed is 30, + 10 from Fast Movement
      speed: '40'
    },

    abilityStats: {
      strength: 19,
      dexterity: 12,
      constitution: 12,
      intelligence: 12,
      wisdom: 12,
      charisma: 13
    },

    skillsRuleset: {
      acrobatics: {
        displayName: 'Acrobatics',
        ability: 'dexterity',
        sortOrder: 1
      },
      appraise : {
        displayName: 'Appraise',
        ability: 'intelligence',
        sortOrder: 2
      },
      bluff: {
        displayName: 'Bluff',
        ability: 'charisma',
        sortOrder: 3
      },
      climb: {
        displayName: 'Climb',
        ability: 'strength',
        sortOrder: 4
      },
      craftOne: {
        displayName: 'x',
        ability: 'intelligence',
        sortOrder: 5
      },
      craftTwo: {
        displayName: 'x',
        ability: 'intelligence',
        sortOrder: 6
      },
      diplomacy: {
        displayName: 'Diplomacy',
        ability: 'charisma',
        sortOrder: 7
      },
      disableDevice: {
        displayName: 'Disable Device',
        ability: 'dexterity',
        sortOrder: 8
      },
      escapeArtist: {
        displayName: 'Escape Artist',
        ability: 'dexterity',
        sortOrder: 9
      },
      handleAnimal: {
        displayName: 'Handle Animal',
        ability: 'charisma',
        sortOrder: 10
      },
      heal: {
        displayName: 'Heal',
        ability: 'wisdom',
        sortOrder: 11
      },
      intimidate: {
        displayName: 'Intimidate',
        ability: 'charisma'
      },
      linguistics: {
        displayName: 'Linguistics',
        ability: 'intelligence'
      },
      perception: {
        displayName: 'Perception',
        ability: 'wisdom'
      },
      perform: {
        displayName: 'Perform',
        ability: 'charisma'
      },
      profession: {
        displayName: 'Profession',
        ability: 'wisdom'
      },
      rideAnimal: {
        displayName: 'Ride Animal',
        ability: 'dexterity'
      },
      senseMotive: {
        displayName: 'Sense Motive',
        ability: 'wisdom'
      },
      sleightOfHand: {
        displayName: 'Sleight of Hand',
        ability: 'dexterity'
      },
      spellCraft: {
        displayName: 'Spellcraft',
        ability: 'intelligence'
      },
      stealth: {
        displayName: 'Stealth',
        ability: 'dexterity'
      }, 
      survival: {
        displayName: 'Survival',
        ability: 'wisdom'
      },
      swim : {
        displayName: 'Swim',
        ability: 'strength'
      },
      useMagicDevice: {
        displayName: 'Use Magic Device',
        ability: 'charisma'
      }
        
    },

    skills: {
      acrobatics: {
        classSkill: true,
        ranks: 1
      },
      appraise : {
        classSkill: true,
        ranks: 1
      },
      bluff: {
        classSkill: true,
        ranks: 1
      },
      climb: {
        classSkill: true,
        ranks: 1
      },
      craftOne: {
        classSkill: true,
        ranks: 1
      },
      craftTwo: {
        classSkill: true,
        ranks: 1
      },
      diplomacy: {
        classSkill: true,
        ranks: 1
      },
      disableDevice: {
        classSkill: true,
        ranks: 1
      },
      escapeArtist: {
        classSkill: true,
        ranks: 1
      },
      handleAnimal: {
        classSkill: true,
        ranks: 1
      },
      heal: {
        classSkill: true,
        ranks: 1
      },
      intimidate: {
        classSkill: true,
        ranks: 1
      },
      linguistics: {
        classSkill: true,
        ranks: 1
      },
      perception: {
        classSkill: true,
        ranks: 1
      },
      perform: {
        classSkill: true,
        ranks: 1
      },
      profession: {
        classSkill: true,
        ranks: 1
      },
      rideAnimal: {
        classSkill: true,
        ranks: 1
      },
      senseMotive: {
        classSkill: true,
        ranks: 1
      },
      sleightOfHand: {
        classSkill: true,
        ranks: 1
      },
      spellCraft: {
        classSkill: true,
        ranks: 1
      },
      stealth: {
        classSkill: true,
        ranks: 1
      }, 
      survival: {
        classSkill: true,
        ranks: 1
      },
      swim : {
        classSkill: true,
        ranks: 1
      },
      useMagicDevice: {
        classSkill: true,
        ranks: 1
      }
    },

    playerStats: {
      totalHp: 46
    }
  
    // playerStats: {
    //   totalHp: 35,
    //   level: 4,
    //   // Scale Mail - make dynamic
    //   ArmorBonus: 5,
    //   // 2 bonus from Erratic Malefactor
    //   initiativeMod: 2,
    //   baseFortitudeSAve: 4,
    //   baseReflexSave: 1,
    //   baseWillSave: 1,
    //   // From Cloak of Resistance
    //   saveBonus: 1,
    // },
  }

export default state;