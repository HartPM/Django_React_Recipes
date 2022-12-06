import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { EditProps, initialFormValues } from '../Types/Types';

function EditRecipeForm({recipe, ingredients}: EditProps) {
    const {
        id,
        strMeal,
        strArea,
        strMealThumb,
        strInstructions,
    } = recipe;

    const initialValues = {
        strMeal: strMeal,
        strArea: strArea,
        strMealThumb: strMealThumb,
        ingredients: ingredients,
        strInstructions: strInstructions,
    }

    const [formValues, setFormValues] = React.useState<initialFormValues>(initialValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleIngredientChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const index = parseInt(name.charAt(13))
        const changeIngredient = formValues.ingredients
        changeIngredient[index] = value
        setFormValues({
            ...formValues,
            ingredients: changeIngredient
        })
    }

    const editIngredients = ingredients.map((ingredient, index) => (
        <TextField 
            key={index}
            id="standard-helperText" 
            name={`strIngredient${index}`}
            label={`Ingredient ${index + 1}`}
            value={formValues.ingredients[index]} 
            onChange={handleIngredientChange}
            variant="standard" 
        />
    ));
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                id="standard-helperText" 
                label="Recipe Name"
                variant="standard"
                name="strMeal"
                value={formValues.strMeal} 
                onChange={handleInputChange}
            />
            <TextField 
                id="standard-helperText" 
                label="Area"
                name="strArea"
                value={formValues.strArea} 
                onChange={handleInputChange}
                variant="standard" 
            />
            <TextField 
                id="standard-helperText" 
                label="Image Url"
                name="strMealThumb"
                value={formValues.strMealThumb} 
                onChange={handleInputChange}
                variant="standard" 
            />
            <br/>
            <br/>
            { editIngredients }
            <br/>
            <br/>
            <TextField 
                id="standard-helperText" 
                label="Instructions"
                name="strInstructions"
                value={formValues.strInstructions} 
                onChange={handleInputChange}
                variant="standard" 
                multiline
                style = {{width: '50ch'}}
            />
        </Box>
    )
}

export default EditRecipeForm;