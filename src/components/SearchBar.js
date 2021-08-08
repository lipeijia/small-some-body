import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      width: '80%',
      border: '3px solid #FF7043',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  const classes = useStyles();
  let history = useHistory();

  const [searchName, setSearchName] = useState('');
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchName.length
      ? history.push(`/org-list/?name=${searchName}`)
      : history.push(`/org-list`);
  };

  return (
    <Paper component='form' className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder='Search NGO'
        inputProps={{ 'aria-label': 'search Non-Governmental Organization' }}
        onChange={handleChange}
        autoFocus
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
