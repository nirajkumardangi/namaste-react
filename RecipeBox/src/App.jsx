import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Loader from './components/Loader';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
