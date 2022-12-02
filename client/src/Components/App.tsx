import * as React from 'react';
import '../Styles/App.css';
import CssBaseline from '@mui/material/CssBaseline';
import ProminentAppBar from './ProminentAppBar';
import AutoGrid from './AutoGrid';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
        <CssBaseline />
        <body>
          <ProminentAppBar />
          <AutoGrid />
          <Footer />
        </body>
    </React.Fragment>
  );
}

export default App;
