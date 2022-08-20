import React from 'react';
import {
  Switch,
  SwitchProps,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

type CustomSwitchProps = {
  label: string;
} & SwitchProps;

export default function CustomSwitch({ label, ...rest }: CustomSwitchProps) {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch {...rest} />} label={label} />
    </FormGroup>
  );
}
