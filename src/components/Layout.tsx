import React, { ReactNode } from 'react';
import CartIcon from './CartIcon';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '@/features/auth/authSelectors';

type LayoutProps ={
    children: ReactNode
}

const Layout = ({children}: LayoutProps)=>{
    const user = useSelector(selectAuthUser);

    function getUsername(user: any) {
        const name = user?.email?.split('@')[0];
        console.log(user.email)
        return name;
    }
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-10">
          <Link href="/dashboard">
            <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:underline">
              MyShop
            </div>
          </Link>
          {user && (
            <p className="text-lg">
              Hello, <strong>{getUsername(user)}</strong>
            </p>
          )}
          <CartIcon />
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="text-center p-4 text-gray-500 text-sm bg-gray-100">
          &copy; 2025 MyShop. All rights reserved.
        </footer>
      </div>
    );
}
export default Layout;