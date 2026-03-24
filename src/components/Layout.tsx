
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  React.useEffect(() => {
    const unlockStaleOverlay = window.setTimeout(() => {
      const hasOpenDialog = document.querySelector('[role="dialog"][data-state="open"]');

      if (!hasOpenDialog) {
        document.body.style.pointerEvents = '';
        document.body.style.overflow = '';
        document.body.style.removeProperty('padding-right');
        document.body.style.removeProperty('--removed-body-scroll-bar-size');
        document.body.removeAttribute('data-scroll-locked');
      }
    }, 0);

    return () => window.clearTimeout(unlockStaleOverlay);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
