import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DateTime from "react-datetime"

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '1%'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: '100%'
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
});

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
            var dateString = start.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
            var duration = parseDuration(end - start).hours;
            return (  <Typography color="textSecondary">{dateString}</Typography>)
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
                return <FontAwesomeIcon className="pull-right" icon="utensils"/>;
            }
            if (event.category_id == "103") {
                return <FontAwesomeIcon className="pull-right" icon="music"/>;
            }
            if (event.category_id == "105") {
                return <FontAwesomeIcon className="pull-right" icon="paint"/>;
            }
            if (event.category_id == "104") {
                return <FontAwesomeIcon className="pull-right" icon="film"/>;
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

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
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
                                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                {/*<Typography color="textSecondary">ID: 1030114</Typography>*/}
                                {renderDate(props.event)}

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
        </div>
    );
}

ResultCardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultCardList);
