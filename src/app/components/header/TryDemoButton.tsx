'use client';

import ScrollHandler from './ScrollHandler';

const TryDemoButton = () => {
  const handleTryDemoClick = () => {
    window.location.href = 'tel:+14847897762';
  };

  return (
    <>
      <ScrollHandler onTryDemoClick={handleTryDemoClick} />
    </>
  );
};

export default TryDemoButton;
