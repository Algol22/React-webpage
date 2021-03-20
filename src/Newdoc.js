import { Button, TextField, Container, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


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



export default function About() {
    const classes = useStyles();
        return (
            <Container fixed>
            <div className={classes.container}>
            <div  style={{ gridColumnEnd: 'span 12' }}>
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
Create Invoice
</Typography>
                </div>
            
            
            
            
            <div align="center" style={{ gridColumnEnd: 'span 4' }}>
<form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Name" placeholder="name"/><br/>
  <TextField id="standard-basic" label="Surname" placeholder="Surname"/><br/>
  <TextField id="standard-basic" label="Age" placeholder="Age"/><br/>
  <TextField id="standard-basic" label="Text" placeholder="Color"/><br/><br/>
  <Button variant="contained">Default</Button>
</form>


            </div>
            <div align="left" className={classes.content} style={{ gridColumnEnd: 'span 8' }}>
      

            <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>



            </div>
           
          </div>
          </Container>
        )
}
