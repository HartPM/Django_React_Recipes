import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import RecipeGrid from './RecipeGrid';
import Resume from './Resume';
import Footer from './Footer';
import MyRecipes from './MyRecipes';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />        
      <Header />
      <br />
      <RecipeGrid />
      <br />
      <MyRecipes />
      <br />
      <Resume />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default App;
