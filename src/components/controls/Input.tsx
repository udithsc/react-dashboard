import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  InputBase,
  InputLabel,
  FormControl,
  FormHelperText,
  InputBaseProps,
  useTheme,
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
    padding: '7px 10px',
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
})) as typeof InputBase;

type CustomInputProps = {
  id?: string;
  label: string;
  helperText?: string;
  error?: boolean;
} & InputBaseProps;

export default function CustomInput({
  id = 'mui-input',
  label,
  helperText,
  error = false,
  ...rest
}: CustomInputProps) {
  const theme = useTheme;
  return (
    <FormControl variant="standard">
      <InputLabel shrink error={error} htmlFor={id}>
        {label}
      </InputLabel>
      <BootstrapInput id={id} {...rest} />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
}
