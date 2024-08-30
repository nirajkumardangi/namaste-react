import styles from './MostPopularRecipes.module.css';
import { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard';
import { MEAL_API } from '../../utils/constants/api';
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';

export default function MostPopularRecipes() {
  const [inputValue, setInputValue] = useState('');
  const [mealsData, setMealsData] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsAvailable(false);
      try {
        const response = await fetch(MEAL_API);
        const data = await response.json();
        setMealsData(data.meals || []); // Ensure mealsData is always an array
        setIsAvailable(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  function searchMeals() {
    const filteredData = mealsData.filter((meal) =>
      meal.strMeal.toLowerCase().includes(inputValue.toLowerCase())
    );
    setMealsData(filteredData);
  }

  return (
    <>
      <div className={styles['search-bar']}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Search for a meal...'
        />
        <button onClick={searchMeals}>Search</button>
      </div>

      <div className={styles['most-popular-recipes']}>
        <h2>Most Popular</h2>
        <p className={styles.para}>
          Don’t miss these popular recipes that are sure to please your whole
          family!
        </p>

        <div className={styles['recipe-container']}>
          {!isAvailable &&
            [...Array(8).fill('')].map((_, index) => <Shimmer key={index} />)}
          {isAvailable &&
            mealsData.map((meal) => (
              <Link to={'/recipe-info/' + meal.idMeal} key={meal.idMeal}>
                <RecipeCard imgUrl={meal.strMealThumb} title={meal.strMeal} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
