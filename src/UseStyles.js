import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    
 

    export default useStyles;
