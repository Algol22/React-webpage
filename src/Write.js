import { Button, TextField, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      maxWidth: 'md',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflowY: 'scroll',
        width:'500px',
        float: 'left',
        height:'500px',
        position:'relative'
      },
      text: {
        padding: theme.spacing(2, 2, 0),
      },
  
  }));



export default function Write() {
    const classes = useStyles();
        return (
            <Container maxWidth="sm">
     
   
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
Write us
</Typography>
<Typography variant="h5" align="center" color="textSecondary" pargraph>
we will get back you shortly
</Typography>

      
<form className={classes.root} noValidate autoComplete="off" method="GET">
    <FormControl fullWidth >
  <TextField id="standard-basic" label="Name" name="user_name"  placeholder="name"/><br/>
  <TextField id="standard-basic" label="Surname" name="user_phone"  placeholder="Surname"/><br/>
  <TextField id="standard-basic" label="Age" placeholder="Age"/><br/>
  <TextField id="standard-basic" label="Text" placeholder="Color"/><br/><br/>
  <Button type="submit" variant="contained" onclick="location.href='telegram.php">Submit</Button>
  </FormControl>
</form>
<br/>

        </Container>
           
    
        
        )
}
