import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    transition: '0.3s',
    '@media (max-width: 1010px)': {
      justifyContent: 'center',
    },
  },
  innerWrap: {
    '@media (max-width: 1010px)': {
      justifyContent: 'center',
    },
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchField: {
    '@media (max-width: 1010px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& form': {
        marginTop: '2em',
        justifyContent: 'center',
      },
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container alignItems='center' className={classes.innerWrap}>
          <Grid item md className={classes.heroImage}>
            <img
              width='400'
              src={process.env.PUBLIC_URL + '/images/figure.png'}
              alt=''
            />
          </Grid>
          <Grid item md={7} className={classes.searchField}>
            <Typography variant='h2'>Small Some Body</Typography>
            <Typography variant='h6'>Finding NGOs in Taiwan.</Typography>
            <SearchBar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
