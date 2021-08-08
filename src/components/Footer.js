import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    padding: '8em 0 2em',
  },
  text: {
    '& a': {
      color: '#666',
    },
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align='center' className={classes.text}>
        A{' '}
        <a
          href='https://cs50.harvard.edu/college/2021/fall/'
          target='_blank'
          rel='noreferrer'
        >
          CS50
        </a>{' '}
        final project made with{' '}
        {
          <FavoriteIcon
            style={{
              fontSize: '16px',
              textAlign: 'bottom',
              color: '#ee4444',
              top: '3px',
              position: 'relative',
            }}
          />
        }{' '}
        and inspired by{' '}
        <a href='https://smallsomebody.tw/' target='_blank' rel='noreferrer'>
          SmallSomeBody
        </a>
      </Typography>
    </div>
  );
}
