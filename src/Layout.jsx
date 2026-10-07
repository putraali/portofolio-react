import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';

const Layout = () => {
  const { pathname } = useLocation();

  // Otomatis scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;