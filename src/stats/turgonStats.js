import weapons from './weapons.js';

 var state = {

    topLevelStats: {
      name: "Turgon",
      alignment: "Chaotic Evil",
      level: 6,
      size: 'M',
      speed: '30'
    },

    abilityStats: {
      strength: 18,
      dexterity: 17,
      constitution: 12,
      intelligence: 12,
      wisdom: 11,
      charisma: 10
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
        ability: 'charisma',
        sortOrder: 12
      },
      linguistics: {
        displayName: 'Linguistics',
        ability: 'intelligence',
        sortOrder: 13
      },
      perception: {
        displayName: 'Perception',
        ability: 'wisdom',
        sortOrder: 14
      },
      perform: {
        displayName: 'Perform',
        ability: 'charisma',
        sortOrder: 15
      },
      profession: {
        displayName: 'Profession',
        ability: 'wisdom',
        sortOrder: 16
      },
      rideAnimal: {
        displayName: 'Ride Animal',
        ability: 'dexterity',
        sortOrder: 17
      },
      senseMotive: {
        displayName: 'Sense Motive',
        ability: 'wisdom',
        sortOrder: 18
      },
      sleightOfHand: {
        displayName: 'Sleight of Hand',
        ability: 'dexterity',
        sortOrder: 19
      },
      spellCraft: {
        displayName: 'Spellcraft',
        ability: 'intelligence',
        sortOrder: 20
      },
      stealth: {
        displayName: 'Stealth',
        ability: 'dexterity',
        sortOrder: 21
      }, 
      survival: {
        displayName: 'Survival',
        ability: 'wisdom',
        sortOrder: 22
      },
      swim : {
        displayName: 'Swim',
        ability: 'strength',
        sortOrder: 23
      },
      useMagicDevice: {
        displayName: 'Use Magic Device',
        ability: 'charisma',
        sortOrder: 24
      }
        
    },

    skills: {
      acrobatics: {
        classSkill: false,
        ranks: 5
      },
      appraise : {
        classSkill: false,
        ranks: 0
      },
      bluff: {
        classSkill: false,
        ranks: 1
      },
      climb: {
        classSkill: true,
        ranks: 5
      },
      craftOne: {
        classSkill: true,
        ranks: 0
      },
      craftTwo: {
        classSkill: false,
        ranks: 0
      },
      diplomacy: {
        classSkill: false,
        ranks: 0
      },
      disableDevice: {
        classSkill: false,
        ranks: 3
      },
      escapeArtist: {
        classSkill: false,
        ranks: 0 
      },
      handleAnimal: {
        classSkill: true,
        ranks: 0,
        displayName: 'Handle Animal'
      },
      heal: {
        classSkill: false,
        ranks: 0
      },
      intimidate: {
        classSkill: true,
        ranks: 0
      },
      knowledgeArcana: {
        classSkill: false,
        ranks: 0,
        displayName: 'Knowledge Arcana'
      },
      knowledgeDungeoneering: {
        classSkill: true,
        ranks: 0,
        displayName: 'Knowledge Dungeoneering'
      },
      knowledgeEngineering: {
        classSkill: false,
        ranks: 0,
        displayName: 'Knowledge Engineering'
      },
      knowledgeGeography: {
        classSkill: false,
        ranks: 0
      },
      knowledgeHistory: {
        classSkill: false,
        ranks: 0
      },
      knowledgeLocal: {
        classSkill: false,
        ranks: 0
      },
      knowledgeNature: {
        classSkill: false,
        ranks: 0
      },
      knowledgeNobility: {
        classSkill: false,
        ranks: 0
      },
      knowledgePlanes: {
        classSkill: false,
        ranks: 0
      },
      knowledgeReligion: {
        classSkill: false,
        ranks: 0
      },
      linguistics: {
        classSkill: false,
        ranks: 1
      },
      perception: {
        classSkill: false,
        ranks: 1
      },
      perform: {
        classSkill: false,
        ranks: 1
      },
      profession: {
        classSkill: false,
        ranks: 1
      },
      rideAnimal: {
        classSkill: false,
        ranks: 1
      },
      senseMotive: {
        classSkill: false,
        ranks: 1
      },
      sleightOfHand: {
        classSkill: false,
        ranks: 1
      },
      spellCraft: {
        classSkill: false,
        ranks: 1
      },
      stealth: {
        classSkill: false,
        ranks: 1
      }, 
      survival: {
        classSkill: false,
        ranks: 1
      },
      swim : {
        classSkill: false,
        ranks: 1
      },
      useMagicDevice: {
        classSkill: false,
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