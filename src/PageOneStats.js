import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TopLevelStats from './TopLevelStats.js';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

class PageOneStats extends Component {

  state = { pageOneStats : this.props.pageOneStats } 

  render() {

    var paperStyle = {
        overflow: 'auto'    
    }

    var flexRow = {
        display: 'flex',
        margin: '.5rem'
    }

    var textFieldStyle = {
       marginLeft: '.5rem',
       maxWidth: '90px' 
    }

    return (
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6}>
                <Paper style={paperStyle}>
                    <Grid item xs={6}>
                        <div className="flex-row">
                            <Chip color="Primary" label="STR"/>
                            <TextField
                                label="Ability Score"
                                defaultValue={this.state.pageOneStats.strength}
                                style={textFieldStyle}
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                        </div>
                       <div className="flex-row">
                            <Chip color="Primary" label="DEX"/>
                        </div>
                       <div className="flex-row">
                            <Chip color="Primary" label="CON"/>
                        </div>
                       <div className="flex-row">
                           <Chip color="Primary" label="INT"/>
                        </div>
                       <div className="flex-row">
                            <Chip color="Primary" label="WIS"/>
                        </div>
                       <div className="flex-row">
                            <Chip color="Primary" label="CHA"/>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Paper>Pathfinder</Paper>
            </Grid> 
        </Grid>
    );
  }
}

export default PageOneStats;
