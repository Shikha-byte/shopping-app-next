// pages/dashboard.tsx
import { useSelector } from 'react-redux';
import { selectAuthToken, selectAuthUser } from '@/features/auth/authSelectors';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const token = useSelector(selectAuthToken);
  const user = useSelector(selectAuthUser);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token]);

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 border rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
      {user && (
        <p className="text-lg">Hello, <strong>{user.name}</strong> ({user.email})</p>
      )}
    </div>
  );
}
