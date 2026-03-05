'use client';

import { useState, useEffect } from 'react';

interface VideoAnimationProps {
  videoClassName: string;
  containerClassName: string;
}

const VideoAnimation: React.FC<VideoAnimationProps> = ({ videoClassName, containerClassName }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const videoSrc = isDarkMode ? '/dark_chat.mp4' : '/light_chat.mp4';

  return (
    <div className={containerClassName}>
      <video
        className={videoClassName}
        autoPlay
        loop
        muted
        playsInline
        key={videoSrc} // Key change forces re-render and video reload
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoAnimation;
