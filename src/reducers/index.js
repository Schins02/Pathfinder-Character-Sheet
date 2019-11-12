
import { combineReducers } from 'redux';
import abilityStatsReducer from './reducerAbilityStats';
import stats from '../stats/stats.js';

const rootReducer = combineReducers({
  abilityStats: abilityStatsReducer
});

export default rootReducer;
