import { MEAL_CATEGORY_API } from '../../utils/api';
import styles from './MealsCategory.module.css';
import { useFetchMealCategory } from '../../utils/useFetchMealCategory';
import Loader from '../Loader';

export default function MealsCategory() {
  const { categories: mealsCategory, isLoading, error } = useFetchMealCategory(
    MEAL_CATEGORY_API
  );

  console.log(mealsCategory);
  console.log(isLoading);
  console.log(error);

  return (
    <div className={styles['categories-container']}>
      <hr />
      <h2 className={styles.header}>Search By Category</h2>
      <ul className={styles.lists}>
        {isLoading && <Loader />}
        {error && <p className='error'>{error}</p>}
        {!isLoading &&
          !error &&
          mealsCategory.length > 0 &&
          mealsCategory.slice(0, 14).map((meal) => (
            <li className={styles.list} key={meal.idCategory}>
              <img
                className={styles.image}
                src={meal.strCategoryThumb}
                alt={meal.strCategory}
              />
              <p className={styles.title}>{meal.strCategory}</p>
            </li>
          ))}
      </ul>
      <hr />
    </div>
  );
}
