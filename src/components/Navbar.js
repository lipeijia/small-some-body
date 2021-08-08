import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 3 : 0,
  });
}

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position='sticky' color='inherit' className={classes.root}>
          <Toolbar>
            <div className={classes.title}>
              <Link to='/small-some-body'>
                <img
                  width='150'
                  src={process.env.PUBLIC_URL + '/images/ssb-logo.png'}
                  alt='small some body logo'
                />
              </Link>
            </div>
            <Link to='/new' style={{ color: '#333', textDecoration: 'none' }}>
              <Typography variant='body1'>Submit your NGO</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
