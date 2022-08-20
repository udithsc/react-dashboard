import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroupProps,
} from '@mui/material';

type CustomRadioProps = {
  id?: string;
  label: string;
  options: { id: string | number; title: string }[];
} & RadioGroupProps;

export default function CustomRadio({
  id = 'radio-buttons-group',
  label,
  options,
  ...rest
}: CustomRadioProps) {
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0]?.id}
        name="radio-buttons-group"
        {...rest}
      >
        {options.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
