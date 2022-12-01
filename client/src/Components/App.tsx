import Resume from '../Assets/Resume.pdf'
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
          <div className="resume">
            <iframe
                title="Resume"
                src={ Resume }
                frameBorder="0"
              >
              </iframe>
          </div>
          <div className="footer">
              <p>Patrick Hart</p>
          </div>
    </body>
  );
}

export default App;
