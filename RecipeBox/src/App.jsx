import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useOnline } from './utils/useOnline';

export default function App() {
  const isOnline = useOnline();

  if (!isOnline) {
    return <h3 className='offline'>🥵 Offline!, please check your internet connection</h3>;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
