import React from 'react';
import { Box, Button, IconButton, ButtonProps } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

type CustomButtonProps = {
  isIconButton?: boolean;
  tooltip?: string;
  children?: React.ReactNode;
} & ButtonProps;

export default function CustomButton({
  tooltip,
  isIconButton,
  children,
  ...rest
}: CustomButtonProps) {
  return (
    <Tooltip
      title={tooltip || ''}
      disableFocusListener={!tooltip}
      disableHoverListener={!tooltip}
    >
      <Box sx={{ alignSelf: 'center' }}>
        {isIconButton ? (
          <IconButton {...rest}>{children}</IconButton>
        ) : (
          <Button variant="contained" {...rest}>
            {children}
          </Button>
        )}
      </Box>
    </Tooltip>
  );
}
