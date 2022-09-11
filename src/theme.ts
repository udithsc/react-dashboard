const rootElement = document.getElementById('root');
import { deepPurple, amber } from '@mui/material/colors';
import { createTheme, experimental_sx as sx } from '@mui/material/styles';

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
const themeOptions = {
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: sx({
          position: 'relative',
          transform: 'translate(0px, 0px) scale(0.75)',
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: sx({
          position: 'static',
          my: 0.5,
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {},
      styleOverrides: {
        root: sx({
          marginLeft: 0,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: sx({
          'legend > span': {
            display: 'none',
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
