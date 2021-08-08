import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    Width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const goals = [
  'Goal 1: No poverty',
  'Goal 2: Zero hunger (No hunger)',
  'Goal 3: Good health and well-being',
  'Goal 4: Quality education',
  'Goal 5: Gender equality',
  'Goal 6: Clean water and sanitation',
  'Goal 7: Affordable and clean energy',
  'Goal 8: Decent work and economic growth',
  'Goal 9: Industry, Innovation and Infrastructure',
  'Goal 10: Reduced inequality',
  'Goal 11: Sustainable cities and communities',
  'Goal 12: Responsible consumption and production',
  'Goal 13: Climate action',
  'Goal 14: Life below water',
  'Goal 15: Life on land',
  'Goal 16: Peace, justice and strong institutions',
  'Goal 17: Partnership for the goals',
];

function getStyles(name, item, theme) {
  return {
    fontWeight:
      item.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelect({ name, value, onChange }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <FormControl
      margin='normal'
      fullWidth
      variant='outlined'
      className={classes.formControl}
    >
      <InputLabel id='mutiple-chip-label'>SDGs</InputLabel>
      <Select
        labelId='mutiple-chip-label'
        id='mutiple-chip'
        multiple
        name={name}
        value={value}
        onChange={onChange}
        input={<Input id='select-multiple-chip' />}
        renderValue={(value) => (
          <div className={classes.chips}>
            {value.map((goal) => (
              <Chip key={goal} label={goal} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {goals.map((goal, i) => (
          <MenuItem key={i} value={goal} style={getStyles(goal, value, theme)}>
            {goal}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
