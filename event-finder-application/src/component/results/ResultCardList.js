import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './ResultList.css'
import randomString from 'random-string'
import LocationCard from "./LocationCard";
import {Link} from "react-router-dom";


var randomMC = require('random-material-color');


const styles = theme => {
    debugger;
    const color = randomMC.getColor();
    return ({
        root: {
            flexGrow: 1,
            padding: '1%'
        },
        paper: {
            padding: theme.spacing.unit * 2,
            margin: 'auto',
            maxWidth: '100%',
            backgroundColor: color,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    })
};

function ResultCardList(props) {

    const {classes} = props;

    debugger;
    console.log("here" + props);

    function renderImage(event) {
        if (event.logo && event.logo.url) {
            return (<ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={props.event.logo.url}/>
            </ButtonBase>)
        }
    }

    function renderPrice(event) {
        if (event.is_free) {
            return (<Typography variant="subtitle1">Free</Typography>)
        }
    }

    function renderDate(event) {
        debugger;
        if (event.start.local && event.end.local) {
            debugger;
            var start = new Date(event.start.local);
            var end = new Date(event.end.local);
            var dateString = start.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour12: true
            });
            var duration = parseDuration(end - start).hours;
            return (
                <div>
                    <FontAwesomeIcon className="d-inline-block icon-padding" icon="calendar"/>
                    <Typography className="d-inline-block" color="textSecondary">{dateString}</Typography>
                </div>)
        }
    }

    function renderDuration(event) {
        debugger;
        if (event.start.local && event.end.local) {
            debugger;
            var start = new Date(event.start.local);
            var end = new Date(event.end.local);
            var dateString = start.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour12: true
            });
            var toDuration = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
            // var duration = parseDuration(end - start).hours;
            var duration = start.toLocaleDateString('en-US', toDuration).substring(11) + " - " +
                end.toLocaleDateString('en-US', toDuration).substring(11);

            return (
                <div>
                    <FontAwesomeIcon className="d-inline-block icon-padding" icon="clock"/>
                    <Typography color="textSecondary" className="d-inline-block"> {duration}</Typography>
                </div>)
        }
    }

    function parseDuration(duration) {
        let remain = duration

        let days = Math.floor(remain / (1000 * 60 * 60 * 24))
        remain = remain % (1000 * 60 * 60 * 24)

        let hours = Math.floor(remain / (1000 * 60 * 60))
        remain = remain % (1000 * 60 * 60)

        let minutes = Math.floor(remain / (1000 * 60))
        remain = remain % (1000 * 60)

        let seconds = Math.floor(remain / (1000))
        remain = remain % (1000)

        let milliseconds = remain

        return {
            days,
            hours,
            minutes,
            seconds,
            milliseconds
        };
    }


    function renderCategoryLogo(event) {
        debugger;
        if (event.category_id) {
            if (event.category_id == "110") {
                return <FontAwesomeIcon className="" icon="utensils"/>;
            }
            if (event.category_id == "103") {
                return <FontAwesomeIcon className="" icon="music"/>;
            }
            if (event.category_id == "105") {
                return <FontAwesomeIcon className="" icon="paint"/>;
            }
            if (event.category_id == "104") {
                return <FontAwesomeIcon className="" icon="film"/>;
            }
        }
        // return <FontAwesomeIcon className="" icon="utensils"/>;
    }

    // function renderImage(event) {
    //     if (event.is_free && event.is_free) {
    //         return (<ButtonBase className={classes.image}>
    //             <img className={classes.img} alt="complex" src={props.event.logo.url}/>
    //         </ButtonBase>)
    //     }
    // }

    function getRandomColor() {
        const color = randomMC.getColor({shades: ['100', '150  '], text: randomString()});
        return {
            backgroundColor: color
        };
    }

    return (
        <div className={classes.root}>
            <Link onClick={() => props.selectEvent(props.event.id)} to="/event">
                <Paper className={classes.paper} style={getRandomColor()}>
                    <Grid container spacing={16}>
                        <Grid item>
                            {renderImage(props.event)}
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={5}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {props.event.name.text}
                                    </Typography>
                                    {/*<Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>*/}
                                    {/*<Typography color="textSecondary">ID: 1030114</Typography>*/}
                                    {renderDate(props.event)}
                                    {renderDuration(props.event)}
                                    <LocationCard eventid={props.event.venue_id}></LocationCard>
                                    {renderCategoryLogo(props.event)}


                                </Grid>
                                {/*<Grid item>*/}
                                {/*<Typography style={{cursor: 'pointer'}}>Remove</Typography>*/}
                                {/*</Grid>*/}
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{renderPrice(props.event)}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </div>
    );
}

ResultCardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultCardList);
