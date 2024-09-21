import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeInfo.module.css';
import Loader from './Loader';

export default function RecipeInfo() {
  // how to read a dynamic URL params
  const { id } = useParams();

  const [mealInfo, setMealInfo] = useState([]);

  useEffect(() => {
    async function fetchMealInfo() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
        );
        const data = await response.json();
        setMealInfo(data.meals[0] || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMealInfo();
  }, []);

  return mealInfo.length === 0 ? (
    <Loader />
  ) : (
    <div className={styles.recipeInfo}>
      <h1 className={styles.name}>{mealInfo.strMeal}</h1>
      <img
        className={styles.thumb}
        src={mealInfo.strMealThumb}
        alt={mealInfo.strMeal}
      />
      <div className={styles.area}>
        <p>
          Category: <span>{mealInfo.strCategory}</span>
        </p>
        <p>
          Area: <span>{mealInfo.strArea}</span>
        </p>
      </div>
      <hr />
      <p>{mealInfo.strInstructions}</p>
      <hr />
      <h2>Ingredients</h2>
      <ul>
        <li>
          {mealInfo.strIngredient1} - {mealInfo.strMeasure1}
        </li>
        <li>
          {mealInfo.strIngredient2} - {mealInfo.strMeasure2}
        </li>
        <li>
          {mealInfo.strIngredient3} - {mealInfo.strMeasure3}
        </li>
        <li>
          {mealInfo.strIngredient4} - {mealInfo.strMeasure4}
        </li>
        <li>
          {mealInfo.strIngredient5} - {mealInfo.strMeasure5}
        </li>
        <li>
          {mealInfo.strIngredient6} - {mealInfo.strMeasure6}
        </li>
        <li>
          {mealInfo.strIngredient7} - {mealInfo.strMeasure7}
        </li>
        <li>
          {mealInfo.strIngredient8} - {mealInfo.strMeasure8}
        </li>
        <li>
          {mealInfo.strIngredient9} - {mealInfo.strMeasure9}
        </li>
      </ul>
    </div>
  );
}
