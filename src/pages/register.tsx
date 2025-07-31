// pages/register.tsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '@/features/auth/authSlice';
import { selectAuthError, selectAuthLoading } from '@/features/auth/authSelectors';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerRequest({ name, email, password }));
    router.push('/login');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" className="w-full p-2 border rounded" required />
          <button type="submit" disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </Layout>
  );
}
