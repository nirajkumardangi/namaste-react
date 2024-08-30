import styles from './RecipeCard.module.css';

export default function RecipeCard({ imgUrl, title }) {
  return (
    <div className={styles['recipe-container']}>
      <img className={styles['recipe-image']} src={imgUrl} alt={title} />
      <a className={styles['recipe-title']}>{title}</a>
    </div>
  );
}
