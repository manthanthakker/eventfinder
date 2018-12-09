import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import RawHtml from "../rawhtml/RawHtml";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LocationCard from "../results/LocationCard";

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4

    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    }
];

const posts = [post1, post2, post3];

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class EventBlog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedEvent: props.selectedEvent,
            classes: props.classes,
            background: props.selectedEvent.logo.url
        }


    }


    renderPrice(event) {
        if (event.is_free) {
            return (<Typography variant="subtitle1">Free</Typography>)
        }
    }

    parseDuration(duration) {
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

    renderDate(event) {
        if (event.start && event.start.local && event.end.local) {
            debugger;
            var start = new Date(event.start.local);
            var end = new Date(event.end.local);
            var dateString = start.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour12: true
            });
            //var duration = parseDuration(end - start).hours;
            return (
                <div>
                    <FontAwesomeIcon className="d-inline-block icon-padding" icon="calendar"/>
                    <Typography className="d-inline-block" color="textSecondary">{dateString}</Typography>
                </div>)
        }
    }

    renderDuration(event) {
        if (event.start&&event.start.local && event.end.local) {
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

    parseDuration(duration) {
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


    renderCategoryLogo(event) {
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

    componentWillReceiveProps(nextprops, nextcont) {
        debugger;
        this.setState({
            selectedEvent: nextprops.selectedEvent,
            classes: nextprops.classes
        });

    }

    render() {

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={this.props.classes.layout}>
                    {/*<Toolbar className={classes.toolbarMain}>*/}
                    {/*<Button size="small">Subscribe</Button>*/}
                    {/*<Typography*/}
                    {/*component="h2"*/}
                    {/*variant="h5"*/}
                    {/*color="inherit"*/}
                    {/*align="center"*/}
                    {/*noWrap*/}
                    {/*className={classes.toolbarTitle}*/}
                    {/*>*/}
                    {/*Blog*/}
                    {/*</Typography>*/}
                    {/*<IconButton>*/}
                    {/*<SearchIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<Button variant="outlined" size="small">*/}
                    {/*Sign up*/}
                    {/*</Button>*/}
                    {/*</Toolbar>*/}
                    <Toolbar variant="dense" className={this.props.classes.toolbarSecondary}>
                        {/*{sections.map(section => (*/}
                        {/*<Typography color="inherit" noWrap key={section}>*/}
                        {/*{section}*/}
                        {/*</Typography>*/}
                        {/*))}*/}
                    </Toolbar>
                    <main>
                        {/* Main featured post */}
                        <Paper className={this.props.classes.mainFeaturedPost}
                               style={{backgroundImage: 'url('+this.props.selectedEvent.logo.url+')'}} >
                            <Grid container >
                                <Grid item md={6}>
                                    <div className={this.props.classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            {this.state.selectedEvent.name.text}
                                        </Typography>
                                        {/*<Typography variant="h5" color="inherit" paragraph>*/}
                                        {/*{this.state.selectedEvent.name.text}*/}
                                        {/*</Typography>*/}
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        {/* End main featured post */}
                        {/* Sub featured posts */}
                        <Grid container spacing={40} className={this.props.classes.cardGrid}>
                            {featuredPosts.map(post => (
                                <Grid item key={post.title} xs={12} md={6}>
                                    <Card className={this.props.classes.card}>
                                        <div className={this.props.classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {this.renderDate(this.state.selectedEvent)}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {this.renderDuration(this.state.selectedEvent)}
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    <LocationCard selectedEvent={this.state.selectedEvent}/>
                                                </Typography>
                                                <Typography variant="subtitle1" color="primary">
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={this.props.classes.cardMedia}
                                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        {/* End sub featured posts */}
                        <Grid container spacing={40} className={this.props.classes.mainGrid}>
                            {/* Main content */}
                            <Grid item xs={12} md={8}>
                                <Typography variant="h6" gutterBottom>
                                    From the Firehose
                                </Typography>
                                <Divider/>
                                <RawHtml children={this.props.selectedEvent.description.text}></RawHtml>
                                {/*{posts.map(post => (*/}
                                {/*<Markdown className={this.props.classes.markdown} key={post.substring(0, 40)}>*/}
                                {/*{post}*/}
                                {/*</Markdown>*/}
                                {/*))}*/}
                            </Grid>
                            {/* End main content */}
                            {/* Sidebar */}
                            <Grid item xs={12} md={4}>
                                <Paper elevation={1} className={this.props.classes.sidebarAboutBox} spacing={1}>
                                    <Typography variant="h6" gutterBottom>
                                        Number of People Going
                                    </Typography>
                                    <Typography>
                                        10000000
                                    </Typography>
                                </Paper>

                                <Typography variant="h6" gutterBottom className={this.props.classes.sidebarSection}>
                                    Archives
                                </Typography>
                                {archives.map(archive => (
                                    <Typography key={archive}>{archive}</Typography>
                                ))}
                                <Typography variant="h6" gutterBottom className={this.props.classes.sidebarSection}>
                                    Social
                                </Typography>
                                {social.map(network => (
                                    <Typography key={network}>{network}</Typography>
                                ))}
                            </Grid>
                            {/* End sidebar */}
                        </Grid>
                    </main>
                </div>
                {/* Footer */}
                <footer className={this.props.classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>

        );
    }

}

EventBlog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventBlog);