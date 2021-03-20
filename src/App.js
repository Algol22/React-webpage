import React from 'react';

import Header from './Header';
import Footer from './Footer';
import useStyles from './UseStyles';

import Cardsbody from './Cardsbody';
import About from './About';
import Newdoc from './Newdoc';
import Write from './Write';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>

<Router>
<Header/>


<Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/newdoc">
        <Newdoc />
      </Route>

      <Route path="/write">
        <Write />
      </Route>
  
      <Route path="/">
        <Cardsbody />
      </Route>
    </Switch>
</Router>


 
<Footer/>




</>
  );
}

export default App;
