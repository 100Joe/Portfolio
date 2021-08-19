import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { GitHub } from '@material-ui/icons';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

import { Button, Typography } from '@material-ui/core';

const git = 'https://github.com/100Joe';


const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    marginLeft: 'auto',
    marginTop: '15px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    margin: 'auto',
    textAlign: 'center'
  }
});

function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            JE
          </Avatar>
        }
        title="Joseph Edmonds"
      />

      <CardContent className={classes.content}>
        <Button variant="body2" color="textPrimary" onClick={() => window.open(git)} >
          Github <GitHub />
        </Button>
      </CardContent>
      <CardContent className={classes.content}>
        <Button variant="body2" color="textPrimary" onClick={() => window.open('mailto:consultingjde@gmail.com')} >
          Email <EmailOutlinedIcon />
        </Button>
      </CardContent>
      <CardContent className={classes.content}>
        <Typography>Welcome to my portfolio</Typography>
      </CardContent>
    </Card>
  )
}

export default Profile;
