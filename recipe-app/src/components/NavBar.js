// src/components/NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = ({ onAddRecipe }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1}}>
                    Recipe Book
                </Typography>
                <Button color="inherit" onClick={onAddRecipe}>
                    Add Recipe
                </Button>
                {/* Add more navigation items here if needed */}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
