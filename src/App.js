import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TopLevelStats from './TopLevelStats.js';
import PageOneStats from './PageOneStats.js';

class App extends Component {
  
  render() {

    var topLevelStats = {
      name: "Gorath",
      alignment: "Chaotic Evil",
      level: 2,
      size: 'M',
      speed: '40'
    }

    var pageOneStats = {
      strength: 18,
      strengthAbilityMod: 4,
      constitution: 12,
      constitutionAbilityMod: 1,
      intelligence: 12,
      intelligenceAbililtyMod: 1,
      wisdom: 12,
      wisdomAbilityMod: 1,
      charisma: 12, 
      charismaAbilityMod: 1
    }

    return (
      <div className="container">
          <TopLevelStats topLevelStats={topLevelStats}></TopLevelStats>
          <PageOneStats pageOneStats={pageOneStats}></PageOneStats>
      </div>
    );
  }
}

export default App;
