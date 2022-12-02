import * as React from 'react';

function RecipeCard() {
  const [title, setTitle] = React.useState('');

  const makeAPICall = async () => {
    try {
      const res = await fetch('www.themealdb.com/api/json/v1/1/random.php');
      const data = await res.json();
      setTitle(data.meals[0].strMeal);
    }
    catch (e) {
      console.log(e)
    }
  }
  
  React.useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <h1>{title}</h1>
  )
}

export default RecipeCard;