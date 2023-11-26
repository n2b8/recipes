import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RecipeCard = ({ recipe }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {recipe.recipe_name}
                </Typography>
                {/* Example: Display recipe description if available */}
                {recipe.recipe_description && (
                    <Typography variant="body2" color="text.secondary">
                        {recipe.recipe_description}
                    </Typography>
                )}
                {/* You can add more fields from the recipe here */}
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
