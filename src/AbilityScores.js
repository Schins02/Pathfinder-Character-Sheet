import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TopLevelStats from "./TopLevelStats.js"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"

class AbilityScores extends Component {

    constructor() {
        super(props)
        const { abilityStats, playerStats } = this.props
        this.state = {
          ...abilityStats,
          ...playerStats,
        }
    }

    

}