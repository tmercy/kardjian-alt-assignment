import React from 'react';
import { makeStyles } from '@mui/styles';
import noResultsCameraMan from '../../static/no-results-camera-man.png';

const useStyles = makeStyles({
  image: {
    backgroundColor: 'transparent',
    width: '50%',
    height: '50%',
  },
});

const NoMovieResults = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.image}
        src={noResultsCameraMan}
        alt='No Results'
      ></img>
      <h2>Oh no! We couldn't find any results for that search.</h2>
      <h2>Please try again.</h2>
    </div>
  );
};

export default NoMovieResults;
