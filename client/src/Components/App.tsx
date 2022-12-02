import Resume from '../Assets/Patrick Hart - Resume.pdf'
import Logo from '../Assets/Beyond+MD+Logo+Design.png';
import '../Styles/App.css';

function App() {
  return (
      <body>
        <div className="nav">
              <img src={ Logo } alt="BeyondMD Logo" />
          </div>
          <div className="main">
              <h1>Hello Beyond</h1>
          </div>
          <div className="container">
            <div className="column">
              <h1>Column 1</h1>
            </div>
            <div className="column">
              <iframe
                title="Resume"
                src={ `${Resume}#view=FitH` }
              />
            </div>
          </div>
          <div className="footer">
            <p>Patrick Hart</p>
          </div>
    </body>
  );
}

export default App;
