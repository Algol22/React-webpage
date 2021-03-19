import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
root:{
  flexGrow:1
},
manuButton:{
  marginRight: theme.spacing(1)
},
title:{
  flexGrow:1
},
mainFeaturePost:{
  position: "relative",
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: "cover",
  backgroundRepeat:"non-repeat",
  backgroundPosition:"center"

},
overlay:{
position:"absolute",
top:0,
bottom:0,
right:0,
left:0,
backgroundOverlay: "rgba(0,0,0,.3)"
},


mainFeaturePostContent:{
  position:"relative",
  padding: theme.spacing(6),
  marginTop: theme.spacing(8)
},
cardMedia:{
  paddingTop:"56.25%"
},
cardContent:{
  flexGrow:1
},
cardGrid:{
  marginTop: theme.spacing(6)
}

}))


const cards= [1,2,3,4,5,6,7,8,9];

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
<AppBar poisiton="fixed" color="default">
<Container fixed>
<Toolbar>

<IconButton edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}>
<MenuIcon/>
</IconButton>

<Typography variant="h6" className={classes.title}> Documents Builder</Typography>

<Box mr={1}>
<Button color="inherit" variant="outlined"> Log in </Button>
</Box>

<Button color="primary" variant="contained"> Sign up </Button>



</Toolbar>
</Container>
</AppBar>





<main>
<Paper className={classes.mainFeaturePost}
style={{backgroundImage:`url(https://source.unsplash.com/AcL5SitD8Wg/1600x900)`}}>
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
<Button variant="contained" color="primary">
Learn more
</Button>

</div>
</Grid>
</Container>
</Paper>
<div className={classes.mainContent}>
<Container maxWidth="md">
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
Options
</Typography>
<Typography variant="h5" align="center" color="textSecondary" pargraph>
Options
</Typography>
<div className={classes.mainButton}>
<Grid container spacing={1} justify="center">
<Grid item>
<Button variant="contained" color="primary">Start now</Button>
</Grid>
<Grid item>
<Button variant="contained" color="outlined">Learn more</Button>
</Grid>
</Grid>
</div>
</Container>
</div>






<Container className={classes.cardGrid} maxwidth="md">
<Grid container spacing={4}>
{cards.map((card) => (
<Grid item key={card} xs={12} sm={6} md={4}>
<Card className={classes.card}>
<CardMedia
className={classes.cardMedia}
image="https://source.unsplash.com/random"
title="Image title"
/>
<CardContent className={classes.cardContent}>
<Typography variant="h5" gutterBottom>
Blog post
</Typography>
<Typography>
learn more
</Typography>
</CardContent>
<CardActions>
<Button size="small" color="primary">
View
</Button>
<Button size="small" color="primary">
Edit
</Button>
<LayerIcon/>
<PlayCircleFilledIcon/>
</CardActions>

</Card>
</Grid>

))}
</Grid>
</Container>

</main>

<footer>
<Typography variant="h6" align="center" gutterBottom>Footer
</Typography>
<BottomNavigation
value={value}
onChange={handleChange}
className={classes.root}>

<BottomNavigationAction
label="Recents"
value="recents"
icon={<RestoreIcon/>}/>

<BottomNavigationAction
label="Favorites"
value="favorites"
icon={<FavoriteIcon/>}/>

<BottomNavigationAction
label="Folder"
value="folder"
icon={<FolderIcon/>}/>

</BottomNavigation>

<Typography align="center" color="textSecondary" component="p" variant="subtitle1">
Site
</Typography>
</footer>



</>
  );
}

export default App;
