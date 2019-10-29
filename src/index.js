import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './stores';
import App from './components/App';

// prepare Theme
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
        // light: will be calculated from palette.primary.main,
            main: '#007E37'
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#3aa738'
        }
        // error: will use the default color
    }
});
ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </MuiThemeProvider>
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);