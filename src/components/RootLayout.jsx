import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout() {
  const location = useLocation();

  const hideFooterOnRoutes = ["/login", "/sign-up"];
  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen">

      <Header />

      <main className='px-12'>
        <Outlet />
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}
