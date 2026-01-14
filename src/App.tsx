import './App.css';
import blankFrame from './assets/frame-blank.jpg';
import React, {useRef, useState} from 'react';

function App() {

  const remoteInputRef = useRef<HTMLInputElement>(null);
  const homeInputRef = useRef<HTMLInputElement>(null);

  const [homeImg, setHomeImg] = useState<string | null>(null);
  const [remoteImg, setRemoteImg] = useState<string | null>(null);

  const handleHomeClick = () => homeInputRef.current?.click();
  const handleRemoteClick = () => remoteInputRef.current?.click();

  const handleHomeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHomeImg(URL.createObjectURL(file));
    }
  };
    const handleRemoteFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setRemoteImg(URL.createObjectURL(file));
    }
  };


  return (
    <div style={{ position: 'relative' }}>
      <div className="home-screen">
        <div>
          <h1>Select Frame</h1>
        </div>

        <div className="buttons-container">

          <button

            onClick={handleHomeClick}
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img 
              src={homeImg ?? blankFrame}
              alt="Home Frame"
            />

            <p>
              Home Frame
            </p>

          </button>
            
          <input
            type="file"
            ref={homeInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleHomeFile}
          />

        <button
            onClick={handleRemoteClick}
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img 
              src={remoteImg ?? blankFrame}
              alt="Home Frame"
            />

            
            <p>
              Remote Frame
            </p>

          </button>

          <input
            type="file"
            ref={remoteInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleRemoteFile}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
