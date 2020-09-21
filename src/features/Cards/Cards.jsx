import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data: {recovered, confirmed, deaths, lastUpdate}}) => {
    if (!recovered) {
        return 'Loading';
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing ={2} justify = "center">
                <Grid item component = {Card} xs = {12} md ={4} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {recovered.value}
                                duration = {1.5}
                                separator = ','
                            />
                        </Typography>
                        <Typography variant="body2">Number of Recovered</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {4} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {confirmed.value}
                                duration = {1.5}
                                separator = ','
                            />
                        </Typography>
                        <Typography variant="body2">Number of Active Cases</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {4} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start = {0}
                                end = {deaths.value}
                                duration = {1.5}
                                separator = ','
                            />
                        </Typography>
                        <Typography variant="body2">Number of Deaths</Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;