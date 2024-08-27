import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Recipe Box</h2>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Recipes</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href='#'>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Recipe Box. All rights reserved.</p>
      </div>
    </footer>
  );
}
