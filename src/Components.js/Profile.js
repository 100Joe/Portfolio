import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { GitHub, Receipt } from '@material-ui/icons';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import { Button } from '@material-ui/core';

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
        subheader="Welcome to my Portfolio"
      />
      <CardContent className={classes.content}>
        <Button variant="body2" color="textPrimary" >
          Resume <Receipt />
        </Button>
      </CardContent>
      <CardContent className={classes.content}>
        <Button variant="body2" color="textPrimary" >
          Github <GitHub />
        </Button>
      </CardContent>
      <CardContent className={classes.content}>
        <Button variant="body2" color="textPrimary" >
          Email <EmailOutlinedIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Profile;
