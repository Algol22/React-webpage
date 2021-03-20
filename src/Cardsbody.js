import { Button, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import useStyles from './UseStyles';

const cards= [1,2,3,4,5,6,7,8,9];



export default function Cardsbody() {
    const classes = useStyles();
    return (
     
<div>
<Container className={classes.mainContent} maxWidth="md">
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
Options
</Typography>
<Typography variant="h5" align="center" color="textSecondary" pargraph>
make your choice
</Typography>
</Container>






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

</div>
    )
}

