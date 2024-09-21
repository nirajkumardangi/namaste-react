import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [like, setLike] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setLike((prevLike) => !prevLike);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles['navbar-logo']}>
          <a href='#'>Recipe&nbsp;Box</a>
        </div>
        <div className={styles['navbar-items']}>
          <ul className={styles['menu-items']}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='' className={styles.like}>
                <i
                  id={styles['heart-icon']}
                  onClick={handleClick}
                  className={`${like ? 'fa-solid' : 'fa-regular'} ${
                    styles.liked
                  } fa-heart `}></i>
              </Link>
            </li>
            <li>
              <Link to=''>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
