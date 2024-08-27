import MealsCategory from './components/body/MealsCategory';
import MostPopularRecipes from './components/body/MostPopularRecipes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default function App() {
  return (
    <>
      <Header />
      <MostPopularRecipes />
      <MealsCategory />
      <Footer />
    </>
  );
}
