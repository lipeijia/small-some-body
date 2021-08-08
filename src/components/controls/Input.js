import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Input({
  name,
  label = 'label',
  value,
  onChange,
  error = null,
}) {
  return (
    <TextField
      // variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      margin='normal'
      required
      {...(error && { error: true, helperText: error })}
    />
  );
}
