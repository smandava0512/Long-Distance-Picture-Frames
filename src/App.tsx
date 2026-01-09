import './App.css';
import blankFrame from './assets/blankFrame.jpg';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="home-screen">

        <div>
          <h1>Select Frame</h1>
        </div>

        <div className="buttons-container">

          <button
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img 
              src={blankFrame}
              alt="Home Frame"
              style={{ width: 200 }}
            />

            <p>
              Home Frame
            </p>
          </button>

          <button
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img 
              src={blankFrame}
              alt="Remote Frame"
              style={{ width: 200 }}
            />

            <p>
              Remote Frame
            </p>
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
