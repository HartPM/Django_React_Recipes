import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { RecipeProps } from '../Types/Types';


export default function MyRecipes({recipes, getMyRecipes}: RecipeProps) {

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    
        const button: HTMLButtonElement = event.currentTarget;
        const recipeId = button.value;

        fetch(`http://localhost:8000/recipes/${recipeId}/destroy`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Recipe was deleted') {
                getMyRecipes()
            }
            else {
                console.log(data)
            }
        })
    };


    const recipeAccordian = recipes?.map((recipe) => (
        <Accordion key={recipe.id}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>{recipe.strMeal}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <img
                height="200"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
            />
            <Typography>
                {recipe.strInstructions}
            </Typography> 
            <Button variant="contained" value={recipe.id} onClick={handleDelete}>
                Delete Recipe
            </Button>
            </AccordionDetails>
        </Accordion>
    ));


  return (
    <div>
        <Typography variant="h4" gutterBottom>
            My Recipes
        </Typography>
        {recipeAccordian}
    </div>
  );
};