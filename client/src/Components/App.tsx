import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import RecipeGrid from './RecipeGrid';
import Resume from './Resume';
import Footer from './Footer';

function App() {


  const makeAPICall = async () => {
    try {
      const response = await fetch('https://covers.openlibrary.org/b/isbn/0385472579-S.jpg', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  React.useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />        
      <Header />
      <br />
      <RecipeGrid />
      <br />
      <Resume />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default App;
