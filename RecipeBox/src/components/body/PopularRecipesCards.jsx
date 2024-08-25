import { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard';
import { MEAL_API } from '../../utils/constants/api';

export default function PopularRecipesCards() {
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(MEAL_API);
      const data = await response.json();
      setMealsData(data.meals[0]);
    }

    fetchData();
  }, []);

  return (
    <RecipeCard imgUrl={mealsData.strMealThumb} title={mealsData.strMeal} />
  );
}
