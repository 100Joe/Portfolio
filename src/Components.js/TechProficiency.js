import React from 'react'
import Fade from 'react-reveal/Fade';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    marginBottom: 60,
    width: '50%',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid',
    height: '545px'
  },
  Typography: {
    fontWeight: 'bold',
    textAlign: 'left',
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
      backgroundColor: '#fff',
      color: '#333',
      cursor: 'pointer',
    }
  },
  Category: {
    fontWeight: 'bold',
    textAlign: 'center',
    transition: "transform 0.15s ease-in-out",
    color: '#333',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#333',
      cursor: 'pointer',
    }
  },
  slider: {
    color: '#333',

    '&:hover': {
      color: '#333'
    }
  },
  textani: {
    color: '#333'
  }
}));


function TechProficiency() {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' color='primary' className={classes.Category}> Languages </Typography>
        <Fade left>
          <Typography gutterBottom variant='body2' color='primary' className={classes.Typography} >
            HTML
          </Typography>
          <Slider
            className={classes.slider}
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
    </Card>
  )
};


export default TechProficiency;
