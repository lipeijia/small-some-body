import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  avatarLarge: {
    background: 'white',
    border: '2px solid #e6e6e6',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  topMargin: {
    marginTop: -theme.spacing(8),
  },
  orgInfo: {
    display: 'flex',
    alignItems: 'end',
    paddingBottom: theme.spacing(1),
  },
  titleHeight: {
    height: '64px',
  },
  introHeight: {
    height: '40px',
    overflow: 'hidden',
  },
  sdgs: {
    display: 'flex',
    marginTop: theme.spacing(1),
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
}));

const appendZero = (num) => (num < 10 ? `0` + num : num);

export default function OrgCard(props) {
  const classes = useStyles();
  const { id, name, banner, location, intro, logo, SDGs } = props;
  let history = useHistory();
  const handleClick = (e) => {
    history.push(`/org/${id}`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={banner}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.topMargin}>
          <div className={classes.orgInfo}>
            <Avatar
              src={logo}
              alt=''
              variant='rounded'
              className={classes.avatarLarge}
            />
            <LocationOnIcon color='action' />
            <Typography component='p'>{location}</Typography>
          </div>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.titleHeight}
          >
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.introHeight}
          >
            {intro}
          </Typography>
          <div className={classes.sdgs}>
            {SDGs.map((sdg) => (
              <Avatar variant='rounded' key={sdg}>
                <img
                  src={`${
                    process.env.PUBLIC_URL
                  }/images/sdgs-icon/SDGs-${appendZero(sdg)}.png`}
                  alt={sdg}
                  width='100%'
                />
              </Avatar>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
