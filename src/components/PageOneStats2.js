import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TopLevelStats from "./TopLevelStats.js"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"
import { connect } from 'react-redux'

class PageOneStats extends Component {
  constructor(props) {
    super(props)
  }
  
  // The characters Dexterity modifier plus any Miscallenous modifier
  //
  calculateInitiative() {
    return (
      this.calculateAbilityMod(this.props.dexterity) + this.props.inititativeMod
    )
  }

  // The bonus your character recieves from their armor plus their Dexterity Modifier plus 10
  //
  calculateArmorClass() {
    return (
      this.state.armorBonus +
      this.this.calculateAbilityMod(this.props.dexterity) +
      10
    )
  }

  // Armor class without Armor Bonus
  //
  calculateTouchArmorClass() {
    return this.this.calculateAbilityMod(this.props.dexterity) + 10
  }

  // Armor class without Dexterity
  //
  calculateFlatFootedArmorClass() {
    return this.props.armorBonus + 10
  }

  calculateFortitudeSaveBonus() {
    return (
      this.props.baseFortitudeSave +
      this.calculateAbilityMod(this.props.constitution) +
      this.props.saveBonus
    )
  }

  calculateReflexSaveBonus() {
    return (
      this.props.baseReflexSave +
      this.calculateAbilityMod(this.props.dexterity) +
      this.props.saveBonus
    )
  }

  calculateWillSaveBonus() {
    return (
      this.props.baseWillSave +
      this.calculateAbilityMod(this.props.wisdom) +
      this.props.saveBonus
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
                      defaultValue={this.props.abilityStats.strength.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.abilityStats.strength.mod}
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
                      defaultValue={this.props.dexterity.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.dexterity.mod}
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
                      defaultValue={this.props.constitution.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.constitution.mod}
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
                      defaultValue={this.props.intelligence.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.intelligence.mod}
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
                      defaultValue={this.props.wisdom.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.wisdon.mod}
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
                      defaultValue={this.props.charisma.score}
                      style={textFieldStyle}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      label="Ability Modifier"
                      defaultValue={this.props.charisma.mod}
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
                {/* <Grid item xs={12}>
                  <div style={flexRow}>
                    <Chip color="primary" label="HP" />
                    <TextField
                      label="Total"
                      defaultValue={this.props.totalHp}
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
                </Grid> */}
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

const mapStateToProps = (state) => {
  return state;
  debugger
}

export default connect(mapStateToProps)(PageOneStats); 
