import React, { useState, useRef } from "react";
import logo from "./logo.png";
import demo from "./demo.mp4";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleDoubleClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="App">
      <div className="video-container">
        <video
          ref={videoRef}
          onDoubleClick={handleDoubleClick}
          className="video-player"
          controls
        >
          <source
            src={demo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {isPaused && (
          <div className="overlay">
            <img src={logo} alt="logo" className="logo" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
