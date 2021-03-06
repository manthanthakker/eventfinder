import React from 'react';
import "./Result.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';





const Result = ({key, event, selectEvent}) => {



    function renderImage(event) {
        if (event.logo && event.logo.url) {
            return <img className={"logo "} src={event.logo.url}></img>
        }
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

    return (
        <li className="list-group-item row search-result">
            {/*<Card className={classes.card}>*/}
                {/*<CardHeader*/}
                    {/*avatar={*/}
                        {/*<Avatar aria-label="Recipe" className={classes.avatar}>*/}
                            {/*R*/}
                        {/*</Avatar>*/}
                    {/*}*/}
                    {/*action={*/}
                        {/*<IconButton>*/}
                            {/*<MoreVertIcon />*/}
                        {/*</IconButton>*/}
                    {/*}*/}
                    {/*title="Shrimp and Chorizo Paella"*/}
                    {/*subheader="September 14, 2016"*/}
                {/*/>*/}
                {/*<CardMedia*/}
                    {/*className={classes.media}*/}
                    {/*image="/static/images/cards/paella.jpg"*/}
                    {/*title="Paella dish"*/}
                {/*/>*/}
                {/*<CardContent>*/}
                    {/*<Typography component="p">*/}
                        {/*This impressive paella is a perfect party dish and a fun meal to cook together with your*/}
                        {/*guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
                    {/*</Typography>*/}
                {/*</CardContent>*/}
                {/*<CardActions className={classes.actions} disableActionSpacing>*/}
                    {/*<IconButton aria-label="Add to favorites">*/}
                        {/*<FavoriteIcon />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="Share">*/}
                        {/*<ShareIcon />*/}
                    {/*</IconButton>*/}
                    {/*/!*<IconButton*!/*/}
                        {/*/!*className={classnames(classes.expand, {*!/*/}
                            {/*/!*[classes.expandOpen]: this.state.expanded,*!/*/}
                        {/*/!*})}*!/*/}
                        {/*/!*onClick={this.handleExpandClick}*!/*/}
                        {/*/!*aria-expanded={this.state.expanded}*!/*/}
                        {/*/!*aria-label="Show more"*!/*/}
                    {/*/!*>*!/*/}
                    {/*/!*</IconButton>*!/*/}
                {/*</CardActions>*/}
                {/*<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>*/}
                    {/*<CardContent>*/}
                        {/*<Typography paragraph>Method:</Typography>*/}
                        {/*<Typography paragraph>*/}
                            {/*Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10*/}
                            {/*minutes.*/}
                        {/*</Typography>*/}
                        {/*<Typography paragraph>*/}
                            {/*Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
                            {/*heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
                            {/*browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving*/}
                            {/*chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,*/}
                            {/*salt and pepper, and cook, stirring often until thickened and fragrant, about 10*/}
                            {/*minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                        {/*</Typography>*/}
                        {/*<Typography paragraph>*/}
                            {/*Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook*/}
                            {/*without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat*/}
                            {/*to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and*/}
                            {/*cook again without stirring, until mussels have opened and rice is just tender, 5 to 7*/}
                            {/*minutes more. (Discard any mussels that don’t open.)*/}
                        {/*</Typography>*/}
                        {/*<Typography>*/}
                            {/*Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                        {/*</Typography>*/}
                    {/*</CardContent>*/}
                {/*</Collapse>*/}
            {/*</Card>*/}
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            {renderImage(event)}

            <Link className="col-8" to="/event" onClick={() =>
                selectEvent(event.id)}>
                {event.name.text}
            </Link>

            {renderCategoryLogo(event)}
        </li>
    )
}

export default Result;

