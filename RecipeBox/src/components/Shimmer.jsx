import styles from './Shimmer.module.css'

export default function Shimmer() {
  return (
    <div className={styles.shimmerCard}>
      <div className={styles.shimmerImage}></div>
      <div className={styles.shimmerTitle}></div>
    </div>
  );
}
