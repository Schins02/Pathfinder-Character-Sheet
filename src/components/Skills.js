import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TopLevelStats from "./TopLevelStats.js"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"
import { connect } from 'react-redux'

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        var flexRow = {
            display: "flex",
            margin: ".5rem",
            justifyContent: "space-between",
          }

        return (
            <Grid item xs={3} sm={12}>
                {this.props.map}
                <div className={flexRow}>
                    {/* <div>Checkbox</div> */}

                </div>


            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
  }
  
  export default connect(mapStateToProps)(Skills);   