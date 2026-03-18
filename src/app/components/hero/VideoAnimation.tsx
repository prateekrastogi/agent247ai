'use client';

import { useSyncExternalStore } from 'react';

interface VideoAnimationProps {
  videoClassName: string;
  containerClassName: string;
}

const VideoAnimation: React.FC<VideoAnimationProps> = ({ videoClassName, containerClassName }) => {
  const isDarkMode = useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', onStoreChange);
      return () => mediaQuery.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    () => false,
  );

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
