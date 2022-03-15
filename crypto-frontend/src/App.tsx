import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css';
import Routes from './Routes/Routes';

const darkTheme = createTheme({
  // palette: {
  //   mode: 'dark',
  // },
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  }
});
const App = ()=>  {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
     <Routes/>
    </ThemeProvider>
    </>
  );
}


export default App;
