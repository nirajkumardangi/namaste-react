import styles from './RecipeCard.module.css';

export default function RecipeCard({ imgUrl, title }) {
  return (
    <a className={styles['recipe-container']}>
      <img className={styles['recipe-image']} src={imgUrl} alt={title} />
      <p className={styles['recipe-title']}>{title}</p>
    </a>
  );
}
