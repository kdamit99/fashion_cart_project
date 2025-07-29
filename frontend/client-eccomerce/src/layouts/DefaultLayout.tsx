import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
