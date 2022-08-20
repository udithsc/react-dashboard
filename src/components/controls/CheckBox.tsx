import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  CheckboxProps,
} from '@mui/material';

type CustomCheckboxProps = {
  label: string;
} & CheckboxProps;

export default function CustomCheckbox({
  label,
  ...rest
}: CustomCheckboxProps) {
  return (
    <FormControl>
      <FormControlLabel control={<Checkbox {...rest} />} label={label} />
    </FormControl>
  );
}
