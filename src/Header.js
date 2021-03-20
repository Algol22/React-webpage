import {Button, AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';
  import Cardsbody from './Cardsbody';
  import About from './About';

  import useStyles from './UseStyles';
  import React from 'react';
  import { withStyles } from '@material-ui/core/styles';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import ListItemText from '@material-ui/core/ListItemText';
  import AccessibilityIcon from '@material-ui/icons/Accessibility';
  import DraftsIcon from '@material-ui/icons/Drafts';
  import HomeIcon from '@material-ui/icons/Home';

  
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  
export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (

<div>
<AppBar poisiton="fixed" color="default">
<Container fixed>
<Toolbar>

<IconButton edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}>


<div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="default"
        onClick={handleClick}
      >
       <MenuIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccessibilityIcon fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: 'none' }} to="/about"><ListItemText primary="About us" /></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: 'none' }} to="/write"> <ListItemText primary="Write us" /></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: 'none' }} to="/"><ListItemText color="inherit" primary="Home" /></Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
</IconButton>

<Typography variant="h6" className={classes.title}> Documents Builder</Typography>

    

</Toolbar>
</Container>
</AppBar>






<Paper className={classes.mainFeaturePost}
style={{backgroundImage:`url(https://source.unsplash.com/1600x900/?vintage)`}}>
<Container fixed>
<Grid item md={6}>
<div className={classes.mainFeaturePostContent}>
<Typography
component="h1"
variant="h3"
color="inherit"
gutterBottom
>
Create your document
</Typography>

<Typography
variant="h5"
color="inherit"
paragraph
>
Create your document
Create your document
</Typography>
<Link style={{ textDecoration: 'none' }} to="/about">
<Button variant="contained" color="primary">
Learn more
</Button>
</Link>

    </div>
    </Grid>
    </Container>
    </Paper>




    </div>
)
}