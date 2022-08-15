import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  InputBase,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

type InputProps = {
  name: string;
  label: string;
  value: string;
  error?: string;
  inputType?: 'password' | 'number' | 'text';
  rows?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  styles?: React.CSSProperties;
};

export default function CustomizedInputs({
  name,
  label,
  value,
  error,
  inputType = 'text',
  rows = 1,
  handleChange,
  disabled,
  readOnly,
  styles,
}: InputProps) {
  return (
    <FormControl variant="standard" sx={{ ...styles }}>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <BootstrapInput
        name={name}
        value={value}
        id="bootstrap-input"
        type={inputType}
        multiline={rows > 1}
        rows={rows}
        onChange={handleChange}
        inputProps={{ readOnly }}
        disabled={disabled}
      />
      <FormHelperText id="component-helper-text" sx={{ color: 'error.main' }}>
        {error}
      </FormHelperText>
    </FormControl>
  );
}
