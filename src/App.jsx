
import { useState } from 'react';
import './App.css';

function App() {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const handleStart = () => {
    setIsPreviewActive(true);
  };

  const handleEnd = () => {
    setIsPreviewActive(false);
  };

  return (
    <main className="app-container">

      <header className="top-bar">
        <div className="brand">
          <span className="brand-dot"></span>
          VOICESYNC
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          SYSTEM READY
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">

          <p className="eyebrow">
            YOUR VOICE. YOUR IDEAS. VISUALIZED.
          </p>

          <h1>
            Voice<span>Sync</span><span className="title-period">.</span>
          </h1>

          <p className="tagline">
            Speak. Understand. Visualize.
          </p>

          <p className="description">
            Transform your words into dynamic visual experiences.
            Let your voice lead the presentation.
          </p>

          <div className="visualizer">
            {[...Array(21)].map((_, index) => (
              <span
                key={index}
                className="visualizer-bar"
                style={{ '--i': index }}
              ></span>
            ))}
          </div>

          {!isPreviewActive ? (
            <button className="start-button" onClick={handleStart}>
              <span className="button-icon">▶</span>
              START PRESENTATION
            </button>
          ) : (
            <div className="preview-controls">
              <p className="preview-status">
                <span className="status-dot"></span>
                INTERFACE PREVIEW ACTIVE
              </p>

              <button className="end-button" onClick={handleEnd}>
                END PREVIEW
              </button>
            </div>
          )}

          <p className="bottom-hint">
            {isPreviewActive
              ? 'Microphone integration is coming in the next phase.'
              : 'AN INTELLIGENT PRESENTATION EXPERIENCE'}
          </p>

        </div>
      </section>

      <footer className="footer">
        <span>VOICESYNC © 2026</span>
        <span>POWERED BY INTELLIGENCE</span>
      </footer>

    </main>
  );
}

export default App;
