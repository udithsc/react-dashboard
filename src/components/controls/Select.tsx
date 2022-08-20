import React from 'react';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Tooltip,
  Select,
  InputBase,
  SelectProps,
} from '@mui/material';

type CustomSelectProps = {
  id?: string;
  label: string;
  helperText?: string;
  error?: boolean;
  tooltip?: string;
  options: { id: string | number; title: string }[];
} & SelectProps;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '7px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomSelect({
  id = 'mui-select',
  label,
  helperText,
  error = false,
  options,
  tooltip = '',
  ...rest
}: CustomSelectProps) {
  return (
    <Tooltip
      title={tooltip}
      disableFocusListener={!tooltip}
      disableHoverListener={!tooltip}
    >
      <FormControl variant="standard">
        <InputLabel shrink error={error} htmlFor={id}>
          {label}
        </InputLabel>
        <Select id={id} input={<BootstrapInput />} {...rest}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </Tooltip>
  );
}
