import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import TopLevelStats from './components/TopLevelStats.js';
import PageOneStats from './components/PageOneStats3.js';

class App extends Component {

  magicGreatAxe = {
    twoHanded: true,
    // Update this flag
    magic: true,
  }

  weapons = [
    this.magicGreatAxe
  ]

  calculateDamageBonus() {
    var weapon = this.stats.currentWeapon;
    var strengthDamageBonus  = this.calculateAbilityMod(this.stats.abilityStats.strength);
    if(weapon.twoHanded) {
      strengthDamageBonus = strengthDamageBonus * (1.5);
    }

    // create 
    if(weapon.magic) {
      strengthDamageBonus = strengthDamageBonus + 1;
    }
  }

  // setDamageBonus() {

  // }

  topLevelStats = {
    name: "Gorath",
    alignment: "Chaotic Evil",
    level: 4,
    size: 'M',
    // Human speed is 30, + 10 from Fast Movement
    speed: '40'
  }

  // Second iteration
  // Will have object for each Ability
  // Will mere into one stats object
  stats = {

    // Rethink this whole structure - eventually pulling from db so doesn't really
    // Matter here
    currentWeapon: this.weapons[0],

    // Ability Stats
    abilityStats : {
      strength : {
        score: 18
      },
      dexterity : {
        score: 12
      },
      constitution : {
        score: 12
      },
      intelligence : {
        score: 12
      },
      wisdom : {
        score: 12
      },
      charisma : {
        score : 13
      }
    },

    playerStats : {
      totalHp: 35,
      level: 4,
      // Scale Mail - make dynamic
      ArmorBonus: 5,
      // 2 bonus from Erratic Malefactor
      initiativeMod: 2,
      baseFortitudeSAve: 4,
      baseReflexSave: 1,
      baseWillSave: 1,
      // From Cloak of Resistance
      saveBonus: 1
    }
  }
  
  render() {
    var playerTurn = {
      normalRound : {
        moveAction : 1,
        fiveFootStep: 1,
        standardOrMoveAction: 1,
        swiftAction: 1,
        // As many free actions as you want
        freeAction: 10000
      },
      fullActionRound : {
        fullRoundAction: 1
      }
    }

    return (
      <div className="container">
          <TopLevelStats topLevelStats={this.topLevelStats}></TopLevelStats>
           <PageOneStats>
          </PageOneStats>
      </div>
    );
  }
}

export default App;
