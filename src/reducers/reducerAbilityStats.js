
const abilityStatsReducer = (state = {}, action) => {
    if(state) {
        state.strength = {
            score: state.strength,
            mod: calculateAbilityMod(state.strength)
        }
        state.dexterity = {
            score: state.dexterity,
            mod: calculateAbilityMod(state.dexterity)
        }        
        state.constitution = {
            score: state.constitution,
            mod: calculateAbilityMod(state.constitution)
        }        
        state.intelligence = {
            score: state.intelligence,
            mod: calculateAbilityMod(state.intelligence)
        }        
        state.wisdom= {
            score: state.wisdom,
            mod: calculateAbilityMod(state.wisdom)
        }
        state.charisma= {
            score: state.charisma,
            mod: calculateAbilityMod(state.charisma)
        } 
    }
    
    return state; 
}

//  The number of ability points above 10 divided by two, then round down
  function calculateAbilityMod(abilityScore) {
    return Math.floor((abilityScore - 10) / 2)
  }

  export default abilityStatsReducer; 