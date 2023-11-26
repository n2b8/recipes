// src/components/RecipesList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/recipes/')
            .then(response => {
                setRecipes(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading recipes...</p>;
    }

    return (
        <Grid container spacing={2} sx={{ mt: 2 }}>
            {recipes.map(recipe => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipesList;
