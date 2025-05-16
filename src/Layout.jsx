import { useState } from 'react';
import '../styles.css';

export default function Layout({ children }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        onError={() => setVideoError(true)}
        poster="/videos/reef-poster.jpg"
        style={{ 
          opacity: videoError ? 0 : 1,
          transition: 'opacity 0.3s'
        }}
      >
        <source src="/videos/Datapod Fish.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay" style={{
        background: videoError 
          ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)'
          : 'rgba(0, 51, 102, 0.6)'
      }}>
        {children}
      </div>
    </>
  );
}
