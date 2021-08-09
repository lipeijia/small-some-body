import React, { useState } from 'react';
import OrgCard from '../components/OrgCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '100%',
    flexGrow: 1,
  },
  noMatches: {
    width: '100%',
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    borderBottom: '1px solid #ececec',
  },
  actions: {
    display: 'flex',
    margin: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  },
}));

const ColorBtn = withStyles(() => ({
  root: {
    color: deepOrange[500],
    borderColor: deepOrange[500],
    '&:hover': {
      color: 'white',
      backgroundColor: deepOrange[500],
    },
  },
}))(Button);

export default function OrgList({ orgsData }) {
  const classes = useStyles();
  const [orgs] = useState(orgsData);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='lg' className={classes.container}>
        <div className={classes.title}>
          <Typography variant='h4'>Search Results</Typography>
        </div>
        <Grid container spacing={3}>
          {orgsData.length !== 0 ? (
            orgs.map((org) => (
              <Grid key={org.id} item xs={12} sm={6} md={4}>
                <OrgCard {...org} />
              </Grid>
            ))
          ) : (
            <Grid item md={12} className={classes.noMatches}>
              <Typography variant='h4' margin='normal'>
                Oops! No Matches NGO
              </Typography>
              <div className={classes.actions}>
                <Link to='/small-some-body'>
                  <ColorBtn variant='outlined'>search again</ColorBtn>
                </Link>
                <Link to='/new'>
                  <ColorBtn variant='outlined'>submit a NGO</ColorBtn>
                </Link>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
