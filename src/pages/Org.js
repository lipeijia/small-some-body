import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
  },
  container: {
    border: '1px solid gray',
    marginTop: theme.spacing(2),
  },
  banner: {
    position: 'relative',
    marginRight: '-24px',
    marginLeft: '-24px',
    marginBottom: theme.spacing(6),
    height: '30vh',
    '& img': {
      width: '100%',
      height: '30vh',
      objectFit: 'cover',
    },
  },
  shadow: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    height: '30vh',
    boxShadow: 'inset 0 0 6vh 2vh rgba(0, 0, 0, .4)',
  },
  logo: {
    zIndex: 3,
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-end',
    bottom: theme.spacing(-6),
    left: theme.spacing(2),
    '& img': {
      width: '15vh',
      height: '15vh',
      objectFit: 'cover',
      borderRadius: '7px',
      border: '1px solid #e6e6e6',
      background: 'white',
    },
  },
  location: {
    display: 'inline-flex',
    padding: `0 0 ${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
  },
  sdgs: {
    padding: '4px 0 16px',
  },
  title: {
    borderBottom: ' 1px solid #eee',
    fontSize: '1em',
    marginTop: '1em',
    display: 'inline-block',
    lineHeight: '2',
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },
}));

const appendZero = (num) => (num < 10 ? `0` + num : num);

export default function Org(props) {
  const { name, location, intro, year, banner, logo, SDGs } = props.org;
  let history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='md' className={classes.container}>
        <div className={classes.banner}>
          <div className={classes.shadow} />
          <img src={banner} alt={name} />
          <div className={classes.logo}>
            <img src={logo} alt='' />
            <div className={classes.location}>
              <LocationOnIcon />
              <Typography variant='body1'>{location}</Typography>
            </div>
          </div>
        </div>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body1' style={{ marginTop: '1em' }}>
          Since {year}
        </Typography>
        <Typography variant='overline' className={classes.title}>
          Intro:
        </Typography>
        <Typography variant='body1'>{intro}</Typography>
        <Typography variant='overline' className={classes.title}>
          Relative SDGs:
        </Typography>
        <Grid container className={classes.sdgs} spacing={1}>
          {SDGs.map((sdg) => (
            <Grid item xs={4} sm={3} md={2} key={sdg}>
              <img
                src={`${
                  process.env.PUBLIC_URL
                }/images/sdgs-icon/SDGs-${appendZero(sdg)}.png`}
                alt={sdg}
                width='100%'
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.back}>
        <Button
          variant='outlined'
          type='button'
          onClick={() => history.goBack()}
        >
          Back to Results
        </Button>
      </div>
      <Footer />
    </div>
  );
}
