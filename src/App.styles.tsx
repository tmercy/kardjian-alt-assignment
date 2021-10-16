import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: '#a8cfe4',
    minHeight: '100vh',
    padding: 20,
  },
  header: {
    textAlign: 'center',
    marginTop: 0,
    padding: 20,
  },
  subHeader: {
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarAndResultsContainer: {
    width: '40%',
  },
  paginationContainer: {
    display: 'flex',
    listStyle: 'none',
    '& a': {
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #241e0c',
      color: '#241e0c',
      marginLeft: '10px',
    },
  },
  pageIsActive: {
    '& a': {
      backgroundColor: '#47ccde',
      color: '#fff',
    },
  },
});

export default useStyles;
