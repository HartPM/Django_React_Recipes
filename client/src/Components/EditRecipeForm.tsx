import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { EditProps } from '../Types/Types';

function EditRecipeForm({recipe, ingredients}: EditProps) {
    const {
        id,
        strMeal,
        strArea,
        strMealThumb,
        strInstructions,
    } = recipe;

    const editIngredients = ingredients.map((ingredient, index) => (
        <TextField 
        key={index}
        id="outlined-helperText" 
        label={`Ingredient ${index + 1}`}
        defaultValue={ingredient} 
        variant="outlined" 
    />
    ))

    
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
                id="outlined-helperText" 
                label="Recipe Name"
                defaultValue={strMeal}
                variant="outlined" 
            />
            <TextField 
                id="outlined-helperText" 
                label="Image Url"
                defaultValue={strMealThumb} 
                variant="outlined" 
            />
            <TextField 
                id="outlined-helperText" 
                label="Area"
                defaultValue={strArea} 
                variant="outlined" 
            />
            { editIngredients }
            <br/>
            <TextField 
                id="outlined-helperText" 
                label="Instructions"
                defaultValue={strInstructions} 
                variant="outlined" 
                multiline
                rows={2}
                maxRows={4}
                sx={{width: 300}}
            />
        </Box>
    )
}

export default EditRecipeForm;