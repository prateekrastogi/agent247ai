'use client';

import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import ScrollHandler from './ScrollHandler';

const LoginButtonAndModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <ScrollHandler onLoginClick={handleOpenLoginModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </>
  );
};

export default LoginButtonAndModal;
