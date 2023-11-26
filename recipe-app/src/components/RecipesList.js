// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/recipes')
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
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>{recipe.recipe_name}</div>
            ))}
        </div>
    );
}

export default RecipesList;
