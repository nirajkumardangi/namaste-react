import { useEffect, useState } from 'react';
import { MEAL_CATEGORY_API } from '../../utils/api';
import styles from './MealsCategory.module.css';

export default function MealsCategory() {
  const [mealsCategory, setMealsCategory] = useState([]);

  useEffect(() => {
    async function fetchMealCategory() {
      const response = await fetch(MEAL_CATEGORY_API);
      const data = await response.json();
      setMealsCategory(data.categories);
    }

    fetchMealCategory();
  }, []);

  return (
    <div className={styles['categories-container']}>
     <hr />
      <h2 className={styles.header}>Search By Category</h2>
      <ul className={styles.lists}>
        {mealsCategory.slice(0, 14).map((meal) => (
          <li className={styles.list} key={meal.idCategory}>
            <img className={styles.image} src={meal.strCategoryThumb} alt={meal.strCategory} />
            <p className={styles.title}>{meal.strCategory}</p>
          </li>
        ))}
      </ul>
    <hr />
    </div>
  );
}
