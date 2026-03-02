'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

const AuthCallbackPage = () => {
  const router = useRouter();
  const { saveAuthData } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const userString = params.get('user');

      if (token && userString) {
        try {
          const user = JSON.parse(userString);
          saveAuthData(token, user);
          // Redirect to a protected page, e.g., /chat
          router.replace('/chat');
        } catch (error) {
          console.error('Error processing auth callback:', error);
          // Handle error, maybe redirect to login with an error message
          router.replace('/');
        }
      } else {
        // No token or user data, redirect to login
        router.replace('/');
      }
    };

    handleCallback();
  }, [router, saveAuthData]);

  return (
    <div>
      <p>Processing authentication...</p>
    
    </div>
  );
};

export default AuthCallbackPage;