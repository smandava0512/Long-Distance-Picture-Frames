import './App.css';
import blankFrame from './assets/blankFrame.jpg';
import React, {useRef, useState} from 'react';

function App() {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
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
            onClick={handleButtonClick}
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
          <div className = 'frame-container'>
            <img 
              src={blankFrame}
              alt="Home Frame"
              style={{ width: 360 }}
            />
          </div>

            <p>
              Home Frame
            </p>

          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />

        <button
            onClick={handleButtonClick}
            className="frame-button"
            style={{
              border: 'none',
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
          <div className = 'frame-container'>
            <img 
              src={blankFrame}
              alt="Home Frame"
              style={{ width: 360 }}
            />
            
          </div>

            <p>
              Remote Frame
            </p>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
