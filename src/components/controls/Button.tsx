import React, { ReactNode } from 'react';
import {
  Button as MuiButton,
  CircularProgress,
  IconButton,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

type ButtonProps = {
  isIconButton?: boolean;
  isLoading?: boolean;
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
  handleClick?: () => void;
  tooltip?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
};

export default function Button({
  text,
  variant = 'contained',
  handleClick,
  tooltip,
  isLoading,
  isIconButton,
  children,
  styles,
}: ButtonProps) {
  return (
    <Tooltip
      title={tooltip || ''}
      disableFocusListener={!tooltip}
      disableHoverListener={!tooltip}
    >
      {isIconButton ? (
        <IconButton onClick={handleClick} sx={{ ...styles }}>
          {children}
        </IconButton>
      ) : (
        <MuiButton variant={variant} onClick={handleClick} sx={{ ...styles }}>
          {isLoading ? (
            <CircularProgress color="secondary" size={'1.5rem'} />
          ) : (
            text
          )}
        </MuiButton>
      )}
    </Tooltip>
  );
}
