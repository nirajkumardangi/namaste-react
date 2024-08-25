import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles['navbar-logo']}><a href='#'>Recipe&nbsp;Box</a></div>
        <div className={styles['navbar-items']}>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Recipes</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'><i id={styles['heart-icon']} className="fa-regular fa-heart"></i></a></li>
            <li><a href='#'><i className="fa-solid fa-magnifying-glass"></i></a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
