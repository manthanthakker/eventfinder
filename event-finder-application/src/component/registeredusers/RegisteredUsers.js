import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function RegisteredUsers(props) {
    const {classes} = props;


    function renderRegisteredUsers(props) {

        {
            debugger;
            if (props && props.registeredUsers.RegisteredUsers) {

                return props.registeredUsers.RegisteredUsers.map(user =>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>{user.firstName} {user.lastName}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Description
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            }
        }

    }

    return (
        <div className={classes.root}>

            {renderRegisteredUsers(props)}

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}>Manthan Thakker</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        I am from Mumbai always looking for music events in Boston.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel disabled>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className={classes.heading}>Aunsh Chaudhari</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        I am from South Bombay and I love partying!
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

RegisteredUsers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisteredUsers);