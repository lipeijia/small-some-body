import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '../components/controls/Input';
import MultiSelect from '../components/controls/MultiSelect';
import { useForm, Form } from '../hooks/useForm';
import uuid from 'uuid/v4';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';

const sdgsGoalNo = (arr) =>
  arr.map((goal) => Number.parseInt(goal.match(/\d+/)));

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 128px)',
    backgroundColor: 'white',
  },
});

const ColorBtn = withStyles(() => ({
  root: {
    color: deepOrange[500],
    border: `1px solid ${deepOrange[500]}`,
    backgroundColor: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: deepOrange[500],
    },
    boxShadow: '3px 3px 1px -2px rgba(0,0,0,0.2)',
    marginTop: '2em',
  },
}))(Button);

const StyledSnackbar = withStyles(() => ({
  root: {
    textAlign: 'center',
    '& div': {
      background: deepOrange[500],
      justifyContent: 'center',
      fontSize: '1.25rem',
    },
  },
}))(Snackbar);

function SlideTransition(props) {
  return <Slide {...props} direction='down' />;
}

export default function NewOrg() {
  const classes = useStyles();
  const { values, handleInputChange, errors, setErrors, resetForm } = useForm();
  let history = useHistory();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = values.name ? '' : 'This field is required.';
    if ('year' in fieldValues)
      temp.year = /^[0-9]{4}$/.test(values.year)
        ? ''
        : 'This field is needs 4 digits.';
    if ('location' in fieldValues)
      temp.location = values.location ? '' : 'This field is required.';
    if ('logo' in fieldValues)
      temp.logo = /(jpg|png|gif|jepg)$/.test(values.logo)
        ? ''
        : 'This field is required valid url(end with .jpg/.png/.gif).';
    if ('banner' in fieldValues)
      temp.banner = /(jpg|png|gif|jepg)$/.test(values.banner)
        ? ''
        : 'This field is required valid url(end with .jpg/.png/.gif).';
    if ('intro' in fieldValues)
      temp.intro = values.intro ? '' : 'This field is required.';

    setErrors({ ...temp });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };

  const localData = JSON.parse(window.localStorage.getItem('NGOs'));
  const [ngos, setNgos] = useState(localData);
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      values.id = uuid();
      values.SDGs = sdgsGoalNo(values.SDGs);

      setNgos((preState) => {
        return [{ ...values }, ...preState];
      });

      setTimeout(() => {
        resetForm();
        history.push('/org-list');
      }, 2000);
    }
  };

  const handleClick = (Transition) => () => {
    if (validate()) {
      setTransition(() => Transition);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.localStorage.setItem('NGOs', JSON.stringify(ngos));
  }, [ngos]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <StyledSnackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
        autoHideDuration={2000}
        onClose={handleClose}
        message='Submit Success!'
      />
      <Container maxWidth='sm'>
        <Typography variant='h4'>
          Submit Your Non Government Organization
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Input
            label='name'
            name='name'
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Input
            label='location'
            name='location'
            value={values.location}
            onChange={handleInputChange}
            error={errors.location}
          />
          <Input
            label='year'
            name='year'
            value={values.year}
            onChange={handleInputChange}
            error={errors.year}
          />
          <Input
            label='logo URL'
            name='logo'
            value={values.logo}
            onChange={handleInputChange}
            error={errors.logo}
          />
          <Input
            label='banner URL'
            name='banner'
            value={values.banner}
            onChange={handleInputChange}
            error={errors.banner}
          />
          <MultiSelect
            name='SDGs'
            value={values.SDGs}
            onChange={handleInputChange}
          />
          <TextField
            name='intro'
            label='About Organization'
            value={values.intro}
            onChange={handleInputChange}
            variant='outlined'
            fullWidth
            margin='normal'
            multiline
            rows={10}
            required
            error={errors.intro}
          />
          <ColorBtn
            type='submit'
            fullWidth
            variant='contained'
            onClick={handleClick(SlideTransition)}
          >
            Submit
          </ColorBtn>
        </Form>
        <Footer />
      </Container>
    </div>
  );
}
