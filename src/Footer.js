import React from 'react';
import { Button, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import useStyles from './UseStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      
<footer>
<br/>
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
    )
}
