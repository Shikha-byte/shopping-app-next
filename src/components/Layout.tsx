import React, { ReactNode } from 'react';
import CartIcon from './CartIcon';
import Link from 'next/link';

type LayoutProps ={
    children: ReactNode
}

const Layout = ({children}: LayoutProps)=>{
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-10">
                <Link href="/">
                    <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:underline">
                        MyShop
                    </div>
                </Link>
                <CartIcon />
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="text-center p-4 text-gray-500 text-sm bg-gray-100">
                &copy; 2025 MyShop. All rights reserved.
            </footer>
        </div>
    )
}
export default Layout;