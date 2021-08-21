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
    fontSize: 18,
    fontFamily: 'Share Tech, sans-serif'
  },
});

function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" variant='h1'>
          Hello I'm <strong>Joseph</strong> it's great to meet you.
          I’m a Software developer, specializing in JavaScript and React. First started learning about HTML with Myspace but didn’t realize my passion for technology until 2020.
          This is when my JavaScript journey started and over the span of 2020 I was able to Brush up on my HTML, learn CSS, and learn JavaScript.
          In February my Nucamp bootcamp started up and over the next 22 weeks we would dive deep into React, ReactNative, Express, Node, and MongoDB to complete the Mern stack.
          Now I volunteer twice a week as a React Mentor with Code the Dream. I am interested in working as a Software engineer with a company that is heavily vested in their people and technology.
          Let’s sit down for an interview and discuss how I can help.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default About;
