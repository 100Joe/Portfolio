import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    padding: '16px',
    margin: '10px',
    marginTop: '15px',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid'
  },
  title: {
    fontSize: 14,
  },
});

function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" variant='button'>
          Insert Elevator Pitch here
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About;
