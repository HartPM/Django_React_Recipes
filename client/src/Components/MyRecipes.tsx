import * as React from 'react';
import Typography from '@mui/material/Typography';
import { RecipesProps } from '../Types/Types';
import RecipeAccordian from './RecipeAccordian';


export default function MyRecipes({recipes, getMyRecipes}: RecipesProps) {

    const recipeRow = recipes?.map((recipe) => (
        <RecipeAccordian key={recipe.id} recipe={recipe} getMyRecipes={getMyRecipes} />
    ));


  return (
    <div>
        <Typography variant="h4" gutterBottom>
            My Recipes
        </Typography>
        { recipeRow }
    </div>
  );
};