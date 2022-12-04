import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

interface Meal {
    id: number;
    strMeal: string;
    strArea: string;
    strMealThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strInstructions: string;
    created: Date;
  }

// const ingredients: string[] = [
//     "strIngredient1", 
//     "strIngredient2",
//     "strIngredient3", 
//     "strIngredient4", 
//     "strIngredient5", 
//     "strIngredient6", 
//     "strIngredient7", 
//     "strIngredient8", 
//     "strIngredient9", 
//     "strIngredient10"
// ]

export default function MyRecipes() {
    const [recipes, setRecipes] = React.useState<Meal[]>([]);

    const makeAPICall = async () => {
        try {
          const res = await fetch('http://localhost:8000/recipes/');
          const data = await res.json();
          setRecipes(data);
        }
        catch (e) {
          console.log(e)
        }
      }
      
    React.useEffect(() => {
    makeAPICall();
    }, []);

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    
        const button: HTMLButtonElement = event.currentTarget;
        console.log(button)
      };


    const recipeAccordian = recipes.map((recipe) => (
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
            <DeleteIcon onClick={event => handleDelete} />           
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
}