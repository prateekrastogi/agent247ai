'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth'; // Adjust path if necessary

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { token, user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return; // Wait for auth data to load
    }

    if (!token) {
      router.replace('/'); // Redirect to home if not authenticated after loading
      return;
    }

    const fetchMessage = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json() as { error?: string };
          throw new Error(errorData.error || 'Failed to fetch message');
        }
        const data = await response.json() as { message?: string };
        setMessage(data.message || '');
      } catch (err: any) {
        setError(err.message);
      } finally {
        // No longer need isLoading state here, as it's handled by useAuth
      }
    };

    fetchMessage();
  }, [token, router, isLoading]); // Re-run effect if token, router, or isLoading changes

  if (isLoading) {
    return <p>Loading authentication...</p>;
  }

  if (!token) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Chat with Backend</h1>
      {user && <p className="mb-4">Welcome, {user.email}!</p>}
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <p className="text-2xl p-4 bg-gray-100 dark:bg-gray-800 rounded-md">{message}</p>
      )}
    </main>
  );
}



