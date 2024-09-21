import styles from './MostPopularRecipes.module.css';
import { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard';
import { MEAL_API } from '../../utils/api';
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { useFetchFood } from '../../utils/useFetchFood';

export default function MostPopularRecipes() {
  const [inputValue, setInputValue] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  const { isLoading, error, mealsData } = useFetchFood(MEAL_API);

  // Search meals when the search input changes
  useEffect(() => {
    if (inputValue.trim() === '') {
      setFilteredMeals(mealsData); // Reset to original data when input is empty
    } else {
      const filteredData = mealsData.filter((meal) =>
        meal.strMeal.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredMeals(filteredData);
    }
  }, [inputValue, mealsData]);

  return (
    <>
      <div className={styles['search-bar']}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Search for a meal...'
        />
        <button>Search</button>
      </div>

      <div className={styles['most-popular-recipes']}>
        <h2>Most Popular</h2>
        {/* <p className={styles.para}>
          Don’t miss these popular recipes that are sure to please your whole
          family!
        </p> */}

        <div className={styles['recipe-container']}>
          {/* Loading shimmer */}
          {isLoading &&
            [...Array(8).fill('')].map((_, index) => <Shimmer key={index} />)}

          {/* Display recipes or Error */}
          {!isLoading &&
          !error &&
          Array.isArray(filteredMeals) &&
          filteredMeals.length > 0
            ? filteredMeals.map((meal) => (
                <Link to={'/recipe-info/' + meal.idMeal} key={meal.idMeal}>
                  <RecipeCard imgUrl={meal.strMealThumb} title={meal.strMeal} />
                </Link>
              ))
            : !isLoading && (
                <ErrorMessage message={error || 'No recipes found.'} />
              )}
        </div>
      </div>
    </>
  );
}
