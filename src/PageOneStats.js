import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TopLevelStats from "./TopLevelStats.js"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"

class PageOneStats extends Component {
  // First iteration
  //state = { pageOneStats : this.props.pageOneStats }
  // Second Iteration
  constructor(props) {
    super(props)
    const { abilityStats, playerStats } = this.props
    this.state = {
      ...abilityStats,
      ...playerStats,
    }
  }
  // state = {
  //     // Ability Scores
  //     //
  //     strength : this.props.abilityStats.strength,
  //     dexterity : this.props.abilityStats.dexterity,
  //     constitution: this.props.abilityStats.constitution,
  //     intelligence: this.props.abilityStats.intelligence,
  //     wisdom: this.props.abilityStats.wisdom,
  //     charisma: this.props.abilityStats.charisma,

  //     inititativeMod: this.props.playerStats.inititativeMod,
  //     armorBonus: this.props.playerStats.armorBonus,
  //     baseAttackBonus: this.props.playerStats.level,

  //   }

  // The number of ability points above 10 divided by two, then round down
  //
  calculateAbilityMod(abilityScore) {
    return Math.floor((abilityScore - 10) / 2)
  }

  // The characters Dexterity modifier plus any Miscallenous modifier
  //
  calculateInitiative() {
    return (
      this.calculateAbilityMod(this.state.dexterity) + this.state.inititativeMod
    )
  }

  // The bonus your character recieves from their armor plus their Dexterity Modifier plus 10
  //
  calculateArmorClass() {
    return (
      this.state.armorBonus +
      this.this.calculateAbilityMod(this.state.dexterity) +
      10
    )
  }

  // Armor class without Armor Bonus
  //
  calculateTouchArmorClass() {
    return this.this.calculateAbilityMod(this.state.dexterity) + 10
  }

  // Armor class without Dexterity
  //
  calculateFlatFootedArmorClass() {
    return this.state.armorBonus + 10
  }

  calculateFortitudeSaveBonus() {
    return (
      this.state.baseFortitudeSave +
      this.calculateAbilityMod(this.state.constitution) +
      this.state.saveBonus
    )
  }

  calculateReflexSaveBonus() {
    return (
      this.state.baseReflexSave +
      this.calculateAbilityMod(this.state.dexterity) +
      this.state.saveBonus
    )
  }

  calculateWillSaveBonus() {
    return (
      this.state.baseWillSave +
      this.calculateAbilityMod(this.state.wisdom) +
      this.state.saveBonus
    )
  }

  calculateAttackBonus(weapon) {}

  calculateDamageBonus(weapon) {}

  enlargePerson() {}

  render() {
    var paperStyle = {
      overflow: "auto",
    }

    var flexRow = {
      display: "flex",
      margin: ".5rem",
      justifyContent: "space-between",
    }

    var chipStyle = {
      marginTop: ".5rem",
    }

    var textFieldStyle = {
      marginLeft: ".5rem",
      maxWidth: "95px",
    }

    var emptyTextFieldLabelStyle = {
      fontSize: ".75rem",
    }

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={8}>
          <Paper style={paperStyle}>
            <Grid container>
              <Grid item xs={9}>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip style={chipStyle} color="primary" label="STR" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.strength.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.strength.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adj"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Mod"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="DEX" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.dexterity.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.dexterity.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adjustment"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Modifier"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="CON" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.constitution.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.constitution.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adj"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Mod"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="INT" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.intelligence.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.intelligence.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adj"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Mod"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="WIS" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.wisdom.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.wisdom.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adj"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Mod"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="CHA" />
                    <TextField
                      label="Ability Score"
                      defaultValue={this.state.charisma.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.calculateAbilityMod(
                        this.state.charisma.score,
                      )}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Adj"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                    <TextField
                      label="Temp Mod"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="HP" />
                    <TextField
                      label="Total"
                      defaultValue={this.state.totalHp}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="DR"
                      defaultValue="0"
                      style={textFieldStyle}
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div style={flexRow}>
                    <TextField
                      label="Wounds / Current HP"
                      defaultValue="0"
                      style={textFieldStyle}
                      multiline
                      rows="5"
                      variant="outlined"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper>Pathfinder</Paper>
        </Grid>
      </Grid>
    )
  }
}

export default PageOneStats
