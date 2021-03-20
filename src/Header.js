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

  
export default function Header() {
    const classes = useStyles();
    return (

<div>
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

<Box mr={1}>
<Button color="primary" variant="contained"> Sign up </Button>
</Box>

<Box mr={1}>
          <Link to="/"><Button color="inherit" variant="outlined"> Home</Button></Link>
          </Box>
        
<Box mr={1}>
          <Link to="/about"><Button color="inherit" variant="outlined"> About </Button></Link>
          </Box>

          <Box mr={1}>
          <Link to="/newdoc"><Button color="inherit" variant="outlined"> New doc </Button></Link>
          </Box>


          <Box mr={1}>
          <Link to="/write"><Button color="inherit" variant="outlined"> Write us </Button></Link>
          </Box>

    

</Toolbar>
</Container>
</AppBar>






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




    </div>
)
}