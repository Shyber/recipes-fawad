import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './app/stores';
import RecipesApp from  './app/containers/RecipesApp';
import Header from './app/components/Header';

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
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={RecipesApp} />
                    {/* <Route exact path="/recipe" component={RecipeDetail} />
                    <Route exact  path="/recipe/:id" component={RecipeDetail} />
                    <Route exact path="/About" component={AboutUsPage} />
                    <Route exact path="/Contact" component={ContactUsPage} /> */}
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);