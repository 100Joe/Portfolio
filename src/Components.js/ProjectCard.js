import React from 'react';
import { Projects } from '../Projects';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Fade from 'react-reveal/Fade';
import GitHub from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';


const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
  media: {
    height: 160,
    backgroundPosition: 'top'
  },
  card: {
    border: '1px solid #BCA88E',
    color: '#fff',
    backgroundColor: '#fff',
    transition: "transform 0.5s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    cursor: 'pointer',
  },
  button: {

    '&:hover': {
      fontstyle: 'italic',

      transition: "transform 0.5s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    }
  },
  body1: {
    '&:hover': {

    }
  },
});

function ProjectCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root} >
      <Grid container spacing={4}>
        {Projects.map((project, id) => (
          <Grid item key={project.id} xs={12} sm={9} md={3}>
            <Fade top>
              <Card className={classes.card} elevation={15}>
                <CardMedia
                  className={classes.media}
                  image={project.image}
                  title={project.name}
                />
                <CardContent>
                  <Typography variant='h6' color='primary' className={classes.body1}>{project.title}</Typography>
                </CardContent>
                <Button onClick={() => window.open(project.url)}
                  className={classes.button}
                >
                  <GitHub />
                </Button>
                <Button onClick={() => window.open(project.url)}
                  className={classes.button}
                >
                  <WebIcon />
                </Button>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectCard;
