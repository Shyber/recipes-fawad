  
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
               Fawad&apos;s Recipes Gallery
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;