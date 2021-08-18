import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech&display=swap');
</style>

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
    fontFamily: 'Share Tech, sans-serif'
  },
});

function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" variant='button'>
          Hello I'm <strong>Joseph</strong> and I would like to tell you a story!...
          <br />
          Growing up I wanted to be a doctor for two reasons, I loved learning and I was constantly curious.
          I did not pursue that route as I made the decision to enter the workforce early starting in customer service.
          It was a great 10 years in customer service that has left me surprised, empowered, and prepared.
          Now that I have some experience with people I am wanting to take what I have learned and leverage it in the tech industry.
          I am currently opening to opportunities in JavaScript, React.js, React Native, Express.js, Node.js and MongoDB.
          <br />
          Got a position? Give me an interview and you won't be dissapointed.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About;
