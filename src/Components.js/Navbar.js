import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: '#02457A',

  },
  sectionLink: {
    marginRight: theme.spacing(2),
    flex: "row-reverse",
    fontSize: "30px"
  },
  name: {
    marginRight: "auto",
    fontSize: "30px",
    fontFamily: "Sans-serif"
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.name}>Joseph.Edmonds</Typography>
        <Link to="section__project" className={classes.sectionLink} color="inherit">Projects</Link>
        <Link to="section__about" className={classes.sectionLink} color="inherit">Resume</Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
