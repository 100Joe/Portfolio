import React from 'react'
import { AppBar, Button, Typography } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';

const git = 'https://github.com/100Joe';
const linkedIn = 'https://www.linkedin.com/in/joseph-edmonds-4b60a514a/';

const useStyle = makeStyles(() => ({
  appbar: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    backgroundColor: '#02457A',

  },
  icon: {
    margin: "auto",
    fontSize: "30px"
  },
  title: {
    justifyContent: "center",
    alignItems: "center",

  }
}))

function Footer() {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title}>Contact me</Typography>
          <Button className={classes.icon} color="inherit" onClick={() => window.open(git)}><GitHubIcon /></Button>
          <Button className={classes.icon} color="inherit" onClick={() => window.open('mailto:consultingjde@gmail.com')}> <EmailIcon /></Button>
          <Button className={classes.icon} color="inherit" onClick={() => window.open(linkedIn)}><LinkedInIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer;
