import { Button, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

export default function Cardsbody() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
     
<div>
<Container className={classes.mainContent} maxWidth="md">
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
Options
</Typography>
<Typography variant="h5" align="center" color="textSecondary" pargraph>
make your choice
</Typography>
<br/>



<Grid container spacing={3}>
        <Grid item xs>
                                <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?tax"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Taxes
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?spring"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Disputes
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?family"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Family law
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
      </Grid>


      <Grid container spacing={3}>
        <Grid item xs>
        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?car"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Car accidents
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?building"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Real  estate
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://source.unsplash.com/1600x900/?people"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    International law
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                                

                                        <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                            </CardActions>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </Collapse>
                            </Card>
        </Grid>
      </Grid>


      </Container>
</div>
    )
}

