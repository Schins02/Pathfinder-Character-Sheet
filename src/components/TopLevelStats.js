import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'

class TopLevelStats extends Component {

constructor(props) {
    super(props)
}

    render() {
        var gridStyle = {
            marginTop: '3rem'
        }

        var paperStyle = {
            height: '80px'
        }

        var h1Style = {
            marginTop: '0',
            padding: '1.3rem'
        }

        var textFieldStyle = {
            margin: '1rem'
        }

        return(
            <Grid container spacing={24} style={gridStyle}>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper style={paperStyle}>
                        <h1 style={h1Style} className="center">Pathfinder</h1>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper style={paperStyle}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField
                                  label="Name"
                                  defaultValue={this.props.topLevelStats.name}
                                  style={textFieldStyle}
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField
                                    label="Alignment"
                                    defaultValue={this.props.topLevelStats.alignment}
                                    style={textFieldStyle}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField
                                    label="Level"
                                    defaultValue={this.props.topLevelStats.level}
                                    style={textFieldStyle}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField
                                    label="Speed"
                                    defaultValue={this.props.topLevelStats.speed}
                                    style={textFieldStyle}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

//export default TopLevelStats;

const mapStateToProps = (state) => {
    return state;
  }
  
  export default connect(mapStateToProps)(TopLevelStats); 