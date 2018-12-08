import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding:'2%'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: '100%',
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
    console.log("here"+props);
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg"/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.event.name.text}
                                </Typography>
                                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                <Typography color="textSecondary">ID: 1030114</Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{cursor: 'pointer'}}>Remove</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
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
