import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 10,
  },
  paper: {
    backgroundColor: '#fff',
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  Typography: {
    fontWeight: 'bold',
    textAlign: 'left',
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    }
  }, Category: {
    fontWeight: 'bold',
    alignItems: 'center',
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    }
  },
  slider: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  textani: {
    color: theme.palette.secondary.main,
  }
}));


function TechProficiency() {

  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} md={8}>
        <Paper elevation={15} className={classes.paper}>
          <CardContent>
            <Typography variant='body2' color='primary' className={classes.Category}> Languages </Typography>
            <Fade left>
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography} >
                HTML
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={6}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography} >
                CSS
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={5}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography} >
                JavaScript
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={7}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Fade>
            <Typography variant='body2' color='primary' className={classes.Category}> Frameworks </Typography>
            <Fade bottom>
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                React.js
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={8}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                ReactNative.js
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={6}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                Express.js
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={6}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                MongoDB
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={6}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Fade>
            <Typography gutterBottom variant='body2' color='primary' className={classes.Category}>
              Other technologies
            </Typography>
            <Fade right>
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                Github
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={7}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                Googling
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={8}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                Material Ui
              </Typography>
              <Slider
                className={classes.slider}
                color='secondary'
                value={8}
                max={10}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Fade>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
      </Grid>
    </Grid>
  )
}


export default TechProficiency;
