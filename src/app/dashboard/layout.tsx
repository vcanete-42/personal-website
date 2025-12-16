'use client';

import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = getToken();

  // Redirect to login if no token
  if (!token) {
    router.push('/login');
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

  return (
    <div className="min-h-screen p-6 bg-green-100 text-green-900">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
          Logout
        </Button>
      </header>

      <main>{children}</main>
    </div>
  );
}
