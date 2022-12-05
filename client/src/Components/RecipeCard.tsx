import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RecipeProps } from '../Types/Types';

interface Dictionary {
  [key: string]: string | undefined;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeCard({getMyRecipes}: RecipeProps) {
  const [recipe, setRecipe] = React.useState<Dictionary>({});
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const makeAPICall = async () => {
    try {
      const res = await fetch('www.themealdb.com/api/json/v1/1/random.php');
      const data = await res.json();
      const recipeObj = data.meals[0];

      setRecipe({
        strMeal: recipeObj.strMeal,
        strArea: recipeObj.strArea,
        strMealThumb: recipeObj.strMealThumb,
        strIngredient1: recipeObj.strIngredient1,
        strIngredient2: recipeObj.strIngredient2,
        strIngredient3: recipeObj.strIngredient3,
        strIngredient4: recipeObj.strIngredient4,
        strIngredient5: recipeObj.strIngredient5,
        strIngredient6: recipeObj.strIngredient6,
        strIngredient7: recipeObj.strIngredient7,
        strIngredient8: recipeObj.strIngredient8,
        strIngredient9: recipeObj.strIngredient9,
        strIngredient10: recipeObj.strIngredient10,
        strInstructions: recipeObj.strInstructions,
      })
    }
    catch (e) {
      console.log(e)
    }
  }
  
  React.useEffect(() => {
    makeAPICall();
  }, []);

  const handleFavorite = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();

    fetch('http://localhost:8000/recipes/create/', {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(recipe)
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 200) {
          getMyRecipes();
        }
        else {
            console.log(data)
        }
    })
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[900] }} aria-label="recipe">
            {recipe.strMeal?.charAt(0)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={recipe.strMeal}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`${recipe.strArea}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Save Recipe" >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={handleFavorite} />
          </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            { recipe.strIngredient1 && recipe.strIngredient1.length > 0 ? `${recipe.strIngredient1}` : null }
            { recipe.strIngredient2 && recipe.strIngredient2.length > 0 ? `, ${recipe.strIngredient2}` : null }
            { recipe.strIngredient3 && recipe.strIngredient3.length > 0 ? `, ${recipe.strIngredient3}` : null }
            { recipe.strIngredient4 && recipe.strIngredient4.length > 0 ? `, ${recipe.strIngredient4}` : null }
            { recipe.strIngredient5 && recipe.strIngredient5.length > 0 ? `, ${recipe.strIngredient5}` : null }
            { recipe.strIngredient6 && recipe.strIngredient6.length > 0 ? `, ${recipe.strIngredient6}` : null }
            { recipe.strIngredient7 && recipe.strIngredient7.length > 0 ? `, ${recipe.strIngredient7}` : null }
            { recipe.strIngredient8 && recipe.strIngredient8.length > 0 ? `, ${recipe.strIngredient8}` : null }
            { recipe.strIngredient9 && recipe.strIngredient9.length > 0 ? `, ${recipe.strIngredient9}` : null }
            { recipe.strIngredient10 && recipe.strIngredient10.length > 0 ? `, ${recipe.strIngredient10}` : null }
          </Typography>
          <Typography paragraph>Directions:</Typography>
          <Typography paragraph>
            { recipe.strInstructions }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;