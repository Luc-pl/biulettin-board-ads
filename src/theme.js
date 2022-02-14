/* eslint-disable linebreak-style */
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Nunito"', 'sans-serif'].join(','),
  }, 
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

export default theme;