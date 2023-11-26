// src/components/AddRecipeForm.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddRecipeForm = () => {
    const [recipeData, setRecipeData] = useState({
        recipe_name: '',
        // ... other recipe fields
    });

    const handleChange = (event) => {
        setRecipeData({
            ...recipeData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(recipeData); // For now, just log the data
        // TODO: Add logic to send data to backend
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="recipe_name"
                label="Recipe Name"
                type="text"
                id="recipe_name"
                value={recipeData.recipe_name}
                onChange={handleChange}
            />
            {/* Add other input fields similarly */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default AddRecipeForm;
