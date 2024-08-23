import styles from './MostPopularRecipes.module.css'

export default function () {
  return (
    <>
      <div className={styles['most-popular-recipes']}>
        <h2>Most Popular</h2>
        <p>
          Don’t miss these popular recipes that are sure to please your whole
          family!
        </p>
      </div>
    </>
  );
}
