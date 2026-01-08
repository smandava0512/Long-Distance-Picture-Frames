import './App.css';

function App() {
  return (
    <div style={{position : 'relative'}}>
      <div className="home-screen">

      <div>
        <h1>Select Frame</h1>
      </div>

      <div>
        
        <button className="frame-button"
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img>
            src={'./assets/blankFrame.jpg'}
          </img>
        </button>

        <button className="frame-button"
          style={{
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img>
            src={'./assets/blankFrame.jpg'}
          </img>
        </button>

      </div>

      </div>
    </div>
    );
}

export default App;
